import CParserVisitor from "./parser/CParserVisitor.js";

class CToJSVisitor extends CParserVisitor {
    constructor() {
        super();
        this.indentLevel = 0;
        this.indent = "    "; // 4 espacios para indentación
        this.hasMain = false;
    }

    // Helpers para indentación
    getIndentation() {
        return this.indent.repeat(this.indentLevel);
    }

    // Visitar programa principal
    visitProgram(ctx) {
        const declarations = ctx.declaration();
        let code = declarations.map(d => this.visit(d)).join("\n\n");
        
        // Si encontramos una función main, agregar la ejecución automática
        if (this.hasMain) {
            code += "\n\n// Ejecutar el programa automáticamente\ntry {\n    main();\n} catch (error) {\n    console.error(\"Error al ejecutar el programa:\", error);\n}";
        }
        return code;
    }

    // Visitar declaraciones
    visitFunctionDeclaration(ctx) {
        const name = ctx.ID().getText();
        if (name === "main") this.hasMain = true;
        const params = ctx.parameterList() ? this.visit(ctx.parameterList()) : "";
        const body = this.visit(ctx.compoundStatement());
        return `// Función ${name}\nfunction ${name}(${params}) ${body}`;
    }

    visitVariableDeclaration(ctx) {
        const name = ctx.ID().getText();
        let initialization = ctx.expression() ? ` = ${this.visit(ctx.expression())}` : "";
        return `${this.getIndentation()}let ${name}${initialization};`;
    }

    // Visitar statements
    visitCompoundStatement(ctx) {
        this.indentLevel++;
        const statements = ctx.statement();
        const body = statements.map(s => this.visit(s)).join("\n");
        this.indentLevel--;
        return `{\n${body}\n${this.getIndentation()}}`;
    }

    visitIfStatement(ctx) {
        const condition = this.visit(ctx.expression());
        const thenStmt = this.visit(ctx.statement(0));
        let elseStmt = "";
        if (ctx.ELSE()) {
            elseStmt = `\n${this.getIndentation()}else ${this.visit(ctx.statement(1))}`;
        }
        return `${this.getIndentation()}if (${condition}) ${thenStmt}${elseStmt}`;
    }

    visitWhileStatement(ctx) {
        const condition = this.visit(ctx.expression());
        const body = this.visit(ctx.statement());
        return `${this.getIndentation()}while (${condition}) ${body}`;
    }

    visitExpressionStatement(ctx) {
        if (!ctx.expression()) return `${this.getIndentation()};`;
        const expr = this.visit(ctx.expression());
        return `${this.getIndentation()}${expr};`;
    }

    visitReturnStatement(ctx) {
        const expr = ctx.expression() ? this.visit(ctx.expression()) : "";
        return `${this.getIndentation()}return ${expr};`;
    }

    // Visitar expresiones
    visitExpression(ctx) {
        return this.visit(ctx.assignmentExpression());
    }

    visitAssignmentExpression(ctx) {
        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.conditionalExpression());
        }
        const left = this.visit(ctx.conditionalExpression());
        const right = this.visit(ctx.assignmentExpression());
        return `${left} = ${right}`;
    }

    visitConditionalExpression(ctx) {
        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.additiveExpression(0));
        }
        const exprs = ctx.additiveExpression();
        const ops = ctx.relationalOperator();
        let result = this.visit(exprs[0]);
        for (let i = 0; i < ops.length; i++) {
            result += ` ${ops[i].getText()} ${this.visit(exprs[i + 1])}`;
        }
        return result;
    }

    visitAdditiveExpression(ctx) {
        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.multiplicativeExpression(0));
        }
        const ops = ctx.children.filter(child => child.getText() === "+" || child.getText() === "-");
        const terms = ctx.multiplicativeExpression();
        let result = this.visit(terms[0]);
        for (let i = 0; i < ops.length; i++) {
            result += ` ${ops[i].getText()} ${this.visit(terms[i + 1])}`;
        }
        return result;
    }

    visitMultiplicativeExpression(ctx) {
        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.primaryExpression(0));
        }
        const ops = ctx.children.filter(child => child.getText() === "*" || child.getText() === "/");
        const terms = ctx.primaryExpression();
        let result = this.visit(terms[0]);
        for (let i = 0; i < ops.length; i++) {
            result += ` ${ops[i].getText()} ${this.visit(terms[i + 1])}`;
        }
        return result;
    }

    visitPrimaryExpression(ctx) {
        if (ctx.ID()) return ctx.ID().getText();
        if (ctx.INT()) return ctx.INT().getText();
        if (ctx.STRING()) return ctx.STRING().getText();
        if (ctx.expression()) return `(${this.visit(ctx.expression())})`;
        if (ctx.functionCall()) return this.visit(ctx.functionCall());
        return "";
    }

    // Visitar llamadas a funciones
    visitFunctionCall(ctx) {
        const name = ctx.ID() ? ctx.ID().getText() : ctx.PRINTF().getText();
        
        // Convertir printf a console.log
        if (name === "printf") {
            if (ctx.argumentList()) {
                const argsList = ctx.argumentList().expression();
                const format = argsList[0].getText();
                const variables = argsList.slice(1).map(arg => this.visit(arg));
                const template = this.convertPrintfToTemplate(format, variables);
                return `console.log(${template})`;
            } else {
                return "console.log()";
            }
        }

        const args = ctx.argumentList() ? this.visit(ctx.argumentList()) : "";
        return `${name}(${args})`;
    }

    // Helper para convertir formato printf a template literal
    convertPrintfToTemplate(format, args) {
        if (!format.startsWith('"') || !format.endsWith('"')) return format;
        const formatStr = format.slice(1, -1);
        const segments = formatStr.split("%d");
        if (args.length === 0) return `"${formatStr}"`;
        
        let result = "`" + segments[0];
        for (let i = 0; i < args.length; i++) {
            result += "${" + args[i] + "}" + (segments[i + 1] || "");
        }
        return result + "`";
    }

    visitArgumentList(ctx) {
        const args = ctx.expression();
        return args.map(arg => this.visit(arg)).join(", ");
    }

    // Visitar parámetros
    visitParameterList(ctx) {
        const params = ctx.parameter();
        return params.map(p => this.visit(p)).join(", ");
    }

    visitParameter(ctx) {
        return ctx.ID().getText();
    }
}

export default CToJSVisitor;
