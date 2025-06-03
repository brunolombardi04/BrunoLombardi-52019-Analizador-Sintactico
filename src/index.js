// Importaciones necesarias para el analizador
import antlr4 from "antlr4";
import chalk from "chalk";
import Table from "cli-table3";
import fs from "fs";
import path from "path";

// Importar los archivos generados por ANTLR4
import CParserLexer from "./parser/CParserLexer.js";
import CParserParser from "./parser/CParserParser.js";
import CToJSVisitor from "./CToJSVisitor.js";

// Clase principal para el análisis
class Analizador {
    constructor() {
        this.tokens = [];
        this.errores = [];
    }

    analizarArchivo(rutaArchivo) {
        // Leer el archivo de entrada
        const entrada = fs.readFileSync(rutaArchivo, "utf8");
        
        // Crear el input stream de ANTLR
        const chars = new antlr4.CharStream(entrada);
        
        // Crear el lexer
        const lexer = new CParserLexer(chars);
        
        // Configurar el listener de errores del lexer
        lexer.removeErrorListeners();
        lexer.addErrorListener(this.crearErrorListener());
        
        // Obtener todos los tokens
        const tokenStream = new antlr4.CommonTokenStream(lexer);
        
        // Almacenar tokens para mostrarlos después
        tokenStream.fill();
        this.tokens = tokenStream.tokens;
        
        // Crear el parser
        const parser = new CParserParser(tokenStream);
        
        // Configurar el listener de errores del parser
        parser.removeErrorListeners();
        parser.addErrorListener(this.crearErrorListener());
        
        try {
            // Iniciar el análisis sintáctico
            const tree = parser.program();
            
            // Mostrar resultados del análisis léxico
            this.mostrarTokens();
            this.mostrarErrores();
            
            if (this.errores.length === 0) {
                console.log(chalk.green(`\n✔ Análisis completado exitosamente`));
                
                // Realizar la traducción a JavaScript
                const visitor = new CToJSVisitor();
                const codigoJS = visitor.visit(tree);
                
                // Mostrar el código JavaScript generado
                console.log(chalk.yellow(`\nCódigo JavaScript generado:`));
                console.log(chalk.white(`------------------------`));
                console.log(codigoJS);
                console.log(chalk.white(`------------------------`));
                
                // Guardar el código JavaScript en un archivo
                const rutaJS = rutaArchivo.replace(".txt", ".js");
                fs.writeFileSync(rutaJS, codigoJS);
                console.log(chalk.green(`\nCódigo JavaScript guardado en: ${rutaJS}`));
                
                // Ejecutar el código JavaScript generado
                console.log(chalk.yellow(`\nEjecutando el código JavaScript:`));
                console.log(chalk.white(`------------------------`));
                try {
                    eval(codigoJS);
                } catch (error) {
                    console.error(chalk.red("Error al ejecutar el código JavaScript:"), error);
                }
                console.log(chalk.white(`------------------------`));
                
                return tree;
            } else {
                console.log(chalk.red(`\n✘ El análisis completó con errores`));
                return null;
            }
        } catch (error) {
            console.error(chalk.red(`\n✘ Error fatal durante el análisis:`), error);
            return null;
        }
    }

    mostrarTokens() {
        const tabla = new Table({
            head: [
                chalk.cyan("Tipo"),
                chalk.cyan("Texto"),
                chalk.cyan("Línea"),
                chalk.cyan("Posición")
            ]
        });

        this.tokens.forEach(token => {
            if (token.type !== -1) { // Ignorar EOF
                tabla.push([
                    CParserLexer.symbolicNames[token.type] || token.type,
                    token.text,
                    token.line,
                    token.column
                ]);
            }
        });

        console.log(chalk.yellow(`\nTokens encontrados:`));
        console.log(tabla.toString());
    }

    mostrarErrores() {
        if (this.errores.length > 0) {
            console.log(chalk.red(`\nErrores encontrados:`));
            const tabla = new Table({
                head: [
                    chalk.red("Línea"),
                    chalk.red("Posición"),
                    chalk.red("Mensaje")
                ]
            });

            this.errores.forEach(error => {
                tabla.push([
                    error.line,
                    error.column,
                    error.msg
                ]);
            });

            console.log(tabla.toString());
        }
    }

    crearErrorListener() {
        const errorListener = Object.create(antlr4.error.ErrorListener);
        
        errorListener.syntaxError = (recognizer, offendingSymbol, line, column, msg, e) => {
            this.errores.push({
                line: line,
                column: column,
                msg: msg
            });
        };
        
        return errorListener;
    }
}

// Función principal
function main() {
    if (process.argv.length < 3) {
        console.log(chalk.red("Error: Debe proporcionar un archivo de entrada"));
        console.log(chalk.yellow("Uso: node src/index.js <archivo_entrada>"));
        process.exit(1);
    }

    const rutaArchivo = process.argv[2];
    
    if (!fs.existsSync(rutaArchivo)) {
        console.log(chalk.red(`Error: El archivo "${rutaArchivo}" no existe`));
        process.exit(1);
    }

    console.log(chalk.blue(`Analizando archivo: ${rutaArchivo}`));
    
    const analizador = new Analizador();
    analizador.analizarArchivo(rutaArchivo);
}

// Ejecutar el programa
main();
