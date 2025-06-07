// Generated from c:/Users/Bruno/Documents/analizador-c-js/grammar/CParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CParserParser}.
 */
public interface CParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CParserParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(CParserParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(CParserParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(CParserParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(CParserParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(CParserParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(CParserParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(CParserParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(CParserParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void enterParameterList(CParserParser.ParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void exitParameterList(CParserParser.ParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(CParserParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(CParserParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(CParserParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(CParserParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#compoundStatement}.
	 * @param ctx the parse tree
	 */
	void enterCompoundStatement(CParserParser.CompoundStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#compoundStatement}.
	 * @param ctx the parse tree
	 */
	void exitCompoundStatement(CParserParser.CompoundStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(CParserParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(CParserParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(CParserParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(CParserParser.ExpressionStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(CParserParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(CParserParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(CParserParser.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(CParserParser.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(CParserParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(CParserParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(CParserParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(CParserParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#assignmentExpression}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentExpression(CParserParser.AssignmentExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#assignmentExpression}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentExpression(CParserParser.AssignmentExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#conditionalExpression}.
	 * @param ctx the parse tree
	 */
	void enterConditionalExpression(CParserParser.ConditionalExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#conditionalExpression}.
	 * @param ctx the parse tree
	 */
	void exitConditionalExpression(CParserParser.ConditionalExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#relationalOperator}.
	 * @param ctx the parse tree
	 */
	void enterRelationalOperator(CParserParser.RelationalOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#relationalOperator}.
	 * @param ctx the parse tree
	 */
	void exitRelationalOperator(CParserParser.RelationalOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#additiveExpression}.
	 * @param ctx the parse tree
	 */
	void enterAdditiveExpression(CParserParser.AdditiveExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#additiveExpression}.
	 * @param ctx the parse tree
	 */
	void exitAdditiveExpression(CParserParser.AdditiveExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#multiplicativeExpression}.
	 * @param ctx the parse tree
	 */
	void enterMultiplicativeExpression(CParserParser.MultiplicativeExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#multiplicativeExpression}.
	 * @param ctx the parse tree
	 */
	void exitMultiplicativeExpression(CParserParser.MultiplicativeExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterPrimaryExpression(CParserParser.PrimaryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitPrimaryExpression(CParserParser.PrimaryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(CParserParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(CParserParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParserParser#argumentList}.
	 * @param ctx the parse tree
	 */
	void enterArgumentList(CParserParser.ArgumentListContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParserParser#argumentList}.
	 * @param ctx the parse tree
	 */
	void exitArgumentList(CParserParser.ArgumentListContext ctx);
}