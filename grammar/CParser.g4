grammar CParser;

// Parser Rules
program
    : declaration* EOF
    ;

declaration
    : variableDeclaration
    | functionDeclaration
    ;

variableDeclaration
    : type ID ('=' expression)? ';'
    ;

functionDeclaration
    : type ID '(' parameterList? ')' compoundStatement
    ;

parameterList
    : parameter (',' parameter)*
    ;

parameter
    : type ID
    ;

type
    : INT_TYPE
    | VOID_TYPE
    ;

compoundStatement
    : '{' statement* '}'
    ;

statement
    : expressionStatement
    | compoundStatement
    | ifStatement
    | whileStatement
    | returnStatement
    | variableDeclaration
    ;

expressionStatement
    : expression? ';'
    ;

ifStatement
    : IF '(' expression ')' statement (ELSE statement)?
    ;

whileStatement
    : WHILE '(' expression ')' statement
    ;

returnStatement
    : RETURN expression? ';'
    ;

expression
    : assignmentExpression
    ;

assignmentExpression
    : conditionalExpression ('=' assignmentExpression)?
    ;

conditionalExpression
    : additiveExpression (relationalOperator additiveExpression)*
    ;

relationalOperator
    : '<'
    | '<='
    | '>'
    | '>='
    | '=='
    | '!='
    ;

additiveExpression
    : multiplicativeExpression (('+' | '-') multiplicativeExpression)*
    ;

multiplicativeExpression
    : primaryExpression (('*' | '/') primaryExpression)*
    ;

primaryExpression
    : ID
    | INT
    | STRING
    | '(' expression ')'
    | functionCall
    ;

functionCall
    : (ID | PRINTF) '(' argumentList? ')'
    ;

argumentList
    : expression (',' expression)*
    ;

// Lexer Rules
// Keywords (deben ir antes de ID para tener precedencia)
IF          : 'if' ;
ELSE        : 'else' ;
WHILE       : 'while' ;
RETURN      : 'return' ;
INT_TYPE    : 'int' ;
VOID_TYPE   : 'void' ;
PRINTF      : 'printf' ;

// Identificadores y literales
ID          : [a-zA-Z_] [a-zA-Z0-9_]* ;
INT         : [0-9]+ ;
STRING      : '"' (~["\r\n] | '\\"')* '"' ;

// Operadores
ASSIGN      : '=' ;
PLUS        : '+' ;
MINUS       : '-' ;
MULT        : '*' ;
DIV         : '/' ;
LT          : '<' ;
LE          : '<=' ;
GT          : '>' ;
GE          : '>=' ;
EQ          : '==' ;
NE          : '!=' ;

// Delimitadores
LPAREN      : '(' ;
RPAREN      : ')' ;
LBRACE      : '{' ;
RBRACE      : '}' ;
SEMICOLON   : ';' ;
COMMA       : ',' ;

// Espacios en blanco y comentarios
WS          : [ \t\r\n]+ -> skip ;
COMMENT     : '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;
