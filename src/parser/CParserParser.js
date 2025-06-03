// Generated from grammar/CParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CParserListener from './CParserListener.js';
import CParserVisitor from './CParserVisitor.js';

const serializedATN = [4,1,30,189,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,3,1,55,
8,1,1,2,1,2,1,2,1,2,3,2,61,8,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,69,8,3,1,3,1,
3,1,3,1,4,1,4,1,4,5,4,77,8,4,10,4,12,4,80,9,4,1,5,1,5,1,5,1,6,1,6,1,7,1,
7,5,7,89,8,7,10,7,12,7,92,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,102,8,
8,1,9,3,9,105,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,116,8,
10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,3,12,126,8,12,1,12,1,12,1,13,
1,13,1,14,1,14,1,14,3,14,135,8,14,1,15,1,15,1,15,1,15,5,15,141,8,15,10,15,
12,15,144,9,15,1,16,1,16,1,17,1,17,1,17,5,17,151,8,17,10,17,12,17,154,9,
17,1,18,1,18,1,18,5,18,159,8,18,10,18,12,18,162,9,18,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,3,19,172,8,19,1,20,1,20,1,20,3,20,177,8,20,1,20,1,20,
1,21,1,21,1,21,5,21,184,8,21,10,21,12,21,187,9,21,1,21,0,0,22,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,5,1,0,5,6,1,0,16,21,
1,0,12,13,1,0,14,15,1,0,7,8,190,0,47,1,0,0,0,2,54,1,0,0,0,4,56,1,0,0,0,6,
64,1,0,0,0,8,73,1,0,0,0,10,81,1,0,0,0,12,84,1,0,0,0,14,86,1,0,0,0,16,101,
1,0,0,0,18,104,1,0,0,0,20,108,1,0,0,0,22,117,1,0,0,0,24,123,1,0,0,0,26,129,
1,0,0,0,28,131,1,0,0,0,30,136,1,0,0,0,32,145,1,0,0,0,34,147,1,0,0,0,36,155,
1,0,0,0,38,171,1,0,0,0,40,173,1,0,0,0,42,180,1,0,0,0,44,46,3,2,1,0,45,44,
1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,
0,0,0,50,51,5,0,0,1,51,1,1,0,0,0,52,55,3,4,2,0,53,55,3,6,3,0,54,52,1,0,0,
0,54,53,1,0,0,0,55,3,1,0,0,0,56,57,3,12,6,0,57,60,5,8,0,0,58,59,5,11,0,0,
59,61,3,26,13,0,60,58,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,26,0,0,
63,5,1,0,0,0,64,65,3,12,6,0,65,66,5,8,0,0,66,68,5,22,0,0,67,69,3,8,4,0,68,
67,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,71,5,23,0,0,71,72,3,14,7,0,72,
7,1,0,0,0,73,78,3,10,5,0,74,75,5,27,0,0,75,77,3,10,5,0,76,74,1,0,0,0,77,
80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,9,1,0,0,0,80,78,1,0,0,0,81,82,
3,12,6,0,82,83,5,8,0,0,83,11,1,0,0,0,84,85,7,0,0,0,85,13,1,0,0,0,86,90,5,
24,0,0,87,89,3,16,8,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,
0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,25,0,0,94,15,1,0,0,0,95,102,3,
18,9,0,96,102,3,14,7,0,97,102,3,20,10,0,98,102,3,22,11,0,99,102,3,24,12,
0,100,102,3,4,2,0,101,95,1,0,0,0,101,96,1,0,0,0,101,97,1,0,0,0,101,98,1,
0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,17,1,0,0,0,103,105,3,26,13,0,104,
103,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,107,5,26,0,0,107,19,1,0,
0,0,108,109,5,1,0,0,109,110,5,22,0,0,110,111,3,26,13,0,111,112,5,23,0,0,
112,115,3,16,8,0,113,114,5,2,0,0,114,116,3,16,8,0,115,113,1,0,0,0,115,116,
1,0,0,0,116,21,1,0,0,0,117,118,5,3,0,0,118,119,5,22,0,0,119,120,3,26,13,
0,120,121,5,23,0,0,121,122,3,16,8,0,122,23,1,0,0,0,123,125,5,4,0,0,124,126,
3,26,13,0,125,124,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,128,5,26,0,
0,128,25,1,0,0,0,129,130,3,28,14,0,130,27,1,0,0,0,131,134,3,30,15,0,132,
133,5,11,0,0,133,135,3,28,14,0,134,132,1,0,0,0,134,135,1,0,0,0,135,29,1,
0,0,0,136,142,3,34,17,0,137,138,3,32,16,0,138,139,3,34,17,0,139,141,1,0,
0,0,140,137,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,
31,1,0,0,0,144,142,1,0,0,0,145,146,7,1,0,0,146,33,1,0,0,0,147,152,3,36,18,
0,148,149,7,2,0,0,149,151,3,36,18,0,150,148,1,0,0,0,151,154,1,0,0,0,152,
150,1,0,0,0,152,153,1,0,0,0,153,35,1,0,0,0,154,152,1,0,0,0,155,160,3,38,
19,0,156,157,7,3,0,0,157,159,3,38,19,0,158,156,1,0,0,0,159,162,1,0,0,0,160,
158,1,0,0,0,160,161,1,0,0,0,161,37,1,0,0,0,162,160,1,0,0,0,163,172,5,8,0,
0,164,172,5,9,0,0,165,172,5,10,0,0,166,167,5,22,0,0,167,168,3,26,13,0,168,
169,5,23,0,0,169,172,1,0,0,0,170,172,3,40,20,0,171,163,1,0,0,0,171,164,1,
0,0,0,171,165,1,0,0,0,171,166,1,0,0,0,171,170,1,0,0,0,172,39,1,0,0,0,173,
174,7,4,0,0,174,176,5,22,0,0,175,177,3,42,21,0,176,175,1,0,0,0,176,177,1,
0,0,0,177,178,1,0,0,0,178,179,5,23,0,0,179,41,1,0,0,0,180,185,3,26,13,0,
181,182,5,27,0,0,182,184,3,26,13,0,183,181,1,0,0,0,184,187,1,0,0,0,185,183,
1,0,0,0,185,186,1,0,0,0,186,43,1,0,0,0,187,185,1,0,0,0,17,47,54,60,68,78,
90,101,104,115,125,134,142,152,160,171,176,185];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CParserParser extends antlr4.Parser {

    static grammarFileName = "CParser.g4";
    static literalNames = [ null, "'if'", "'else'", "'while'", "'return'", 
                            "'int'", "'void'", "'printf'", null, null, null, 
                            "'='", "'+'", "'-'", "'*'", "'/'", "'<'", "'<='", 
                            "'>'", "'>='", "'=='", "'!='", "'('", "')'", 
                            "'{'", "'}'", "';'", "','" ];
    static symbolicNames = [ null, "IF", "ELSE", "WHILE", "RETURN", "INT_TYPE", 
                             "VOID_TYPE", "PRINTF", "ID", "INT", "STRING", 
                             "ASSIGN", "PLUS", "MINUS", "MULT", "DIV", "LT", 
                             "LE", "GT", "GE", "EQ", "NE", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "SEMICOLON", "COMMA", "WS", 
                             "COMMENT", "BLOCK_COMMENT" ];
    static ruleNames = [ "program", "declaration", "variableDeclaration", 
                         "functionDeclaration", "parameterList", "parameter", 
                         "type", "compoundStatement", "statement", "expressionStatement", 
                         "ifStatement", "whileStatement", "returnStatement", 
                         "expression", "assignmentExpression", "conditionalExpression", 
                         "relationalOperator", "additiveExpression", "multiplicativeExpression", 
                         "primaryExpression", "functionCall", "argumentList" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CParserParser.ruleNames;
        this.literalNames = CParserParser.literalNames;
        this.symbolicNames = CParserParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CParserParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===6) {
	            this.state = 44;
	            this.declaration();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(CParserParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CParserParser.RULE_declaration);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.variableDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.functionDeclaration();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CParserParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.type();
	        this.state = 57;
	        this.match(CParserParser.ID);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 58;
	            this.match(CParserParser.ASSIGN);
	            this.state = 59;
	            this.expression();
	        }

	        this.state = 62;
	        this.match(CParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CParserParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.type();
	        this.state = 65;
	        this.match(CParserParser.ID);
	        this.state = 66;
	        this.match(CParserParser.LPAREN);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===6) {
	            this.state = 67;
	            this.parameterList();
	        }

	        this.state = 70;
	        this.match(CParserParser.RPAREN);
	        this.state = 71;
	        this.compoundStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CParserParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.parameter();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 74;
	            this.match(CParserParser.COMMA);
	            this.state = 75;
	            this.parameter();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CParserParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.type();
	        this.state = 82;
	        this.match(CParserParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CParserParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compoundStatement() {
	    let localctx = new CompoundStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CParserParser.RULE_compoundStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(CParserParser.LBRACE);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 88082426) !== 0)) {
	            this.state = 87;
	            this.statement();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this.match(CParserParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CParserParser.RULE_statement);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 22:
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.expressionStatement();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.compoundStatement();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.ifStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.whileStatement();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.returnStatement();
	            break;
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
	            this.variableDeclaration();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CParserParser.RULE_expressionStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196224) !== 0)) {
	            this.state = 103;
	            this.expression();
	        }

	        this.state = 106;
	        this.match(CParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CParserParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(CParserParser.IF);
	        this.state = 109;
	        this.match(CParserParser.LPAREN);
	        this.state = 110;
	        this.expression();
	        this.state = 111;
	        this.match(CParserParser.RPAREN);
	        this.state = 112;
	        this.statement();
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 113;
	            this.match(CParserParser.ELSE);
	            this.state = 114;
	            this.statement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CParserParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(CParserParser.WHILE);
	        this.state = 118;
	        this.match(CParserParser.LPAREN);
	        this.state = 119;
	        this.expression();
	        this.state = 120;
	        this.match(CParserParser.RPAREN);
	        this.state = 121;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CParserParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(CParserParser.RETURN);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196224) !== 0)) {
	            this.state = 124;
	            this.expression();
	        }

	        this.state = 127;
	        this.match(CParserParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CParserParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.assignmentExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentExpression() {
	    let localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CParserParser.RULE_assignmentExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.conditionalExpression();
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 132;
	            this.match(CParserParser.ASSIGN);
	            this.state = 133;
	            this.assignmentExpression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalExpression() {
	    let localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, CParserParser.RULE_conditionalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.additiveExpression();
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4128768) !== 0)) {
	            this.state = 137;
	            this.relationalOperator();
	            this.state = 138;
	            this.additiveExpression();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relationalOperator() {
	    let localctx = new RelationalOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CParserParser.RULE_relationalOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4128768) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, CParserParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.multiplicativeExpression();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12 || _la===13) {
	            this.state = 148;
	            _la = this._input.LA(1);
	            if(!(_la===12 || _la===13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 149;
	            this.multiplicativeExpression();
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, CParserParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.primaryExpression();
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 156;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 157;
	            this.primaryExpression();
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, CParserParser.RULE_primaryExpression);
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.match(CParserParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.match(CParserParser.INT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 165;
	            this.match(CParserParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 166;
	            this.match(CParserParser.LPAREN);
	            this.state = 167;
	            this.expression();
	            this.state = 168;
	            this.match(CParserParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 170;
	            this.functionCall();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, CParserParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 174;
	        this.match(CParserParser.LPAREN);
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196224) !== 0)) {
	            this.state = 175;
	            this.argumentList();
	        }

	        this.state = 178;
	        this.match(CParserParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentList() {
	    let localctx = new ArgumentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, CParserParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.expression();
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 181;
	            this.match(CParserParser.COMMA);
	            this.state = 182;
	            this.expression();
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CParserParser.EOF = antlr4.Token.EOF;
CParserParser.IF = 1;
CParserParser.ELSE = 2;
CParserParser.WHILE = 3;
CParserParser.RETURN = 4;
CParserParser.INT_TYPE = 5;
CParserParser.VOID_TYPE = 6;
CParserParser.PRINTF = 7;
CParserParser.ID = 8;
CParserParser.INT = 9;
CParserParser.STRING = 10;
CParserParser.ASSIGN = 11;
CParserParser.PLUS = 12;
CParserParser.MINUS = 13;
CParserParser.MULT = 14;
CParserParser.DIV = 15;
CParserParser.LT = 16;
CParserParser.LE = 17;
CParserParser.GT = 18;
CParserParser.GE = 19;
CParserParser.EQ = 20;
CParserParser.NE = 21;
CParserParser.LPAREN = 22;
CParserParser.RPAREN = 23;
CParserParser.LBRACE = 24;
CParserParser.RBRACE = 25;
CParserParser.SEMICOLON = 26;
CParserParser.COMMA = 27;
CParserParser.WS = 28;
CParserParser.COMMENT = 29;
CParserParser.BLOCK_COMMENT = 30;

CParserParser.RULE_program = 0;
CParserParser.RULE_declaration = 1;
CParserParser.RULE_variableDeclaration = 2;
CParserParser.RULE_functionDeclaration = 3;
CParserParser.RULE_parameterList = 4;
CParserParser.RULE_parameter = 5;
CParserParser.RULE_type = 6;
CParserParser.RULE_compoundStatement = 7;
CParserParser.RULE_statement = 8;
CParserParser.RULE_expressionStatement = 9;
CParserParser.RULE_ifStatement = 10;
CParserParser.RULE_whileStatement = 11;
CParserParser.RULE_returnStatement = 12;
CParserParser.RULE_expression = 13;
CParserParser.RULE_assignmentExpression = 14;
CParserParser.RULE_conditionalExpression = 15;
CParserParser.RULE_relationalOperator = 16;
CParserParser.RULE_additiveExpression = 17;
CParserParser.RULE_multiplicativeExpression = 18;
CParserParser.RULE_primaryExpression = 19;
CParserParser.RULE_functionCall = 20;
CParserParser.RULE_argumentList = 21;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_program;
    }

	EOF() {
	    return this.getToken(CParserParser.EOF, 0);
	};

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_declaration;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_variableDeclaration;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	ID() {
	    return this.getToken(CParserParser.ID, 0);
	};

	SEMICOLON() {
	    return this.getToken(CParserParser.SEMICOLON, 0);
	};

	ASSIGN() {
	    return this.getToken(CParserParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_functionDeclaration;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	ID() {
	    return this.getToken(CParserParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(CParserParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CParserParser.RPAREN, 0);
	};

	compoundStatement() {
	    return this.getTypedRuleContext(CompoundStatementContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_parameterList;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParserParser.COMMA);
	    } else {
	        return this.getToken(CParserParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_parameter;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	ID() {
	    return this.getToken(CParserParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_type;
    }

	INT_TYPE() {
	    return this.getToken(CParserParser.INT_TYPE, 0);
	};

	VOID_TYPE() {
	    return this.getToken(CParserParser.VOID_TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompoundStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_compoundStatement;
    }

	LBRACE() {
	    return this.getToken(CParserParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(CParserParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterCompoundStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitCompoundStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitCompoundStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_statement;
    }

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	compoundStatement() {
	    return this.getTypedRuleContext(CompoundStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_expressionStatement;
    }

	SEMICOLON() {
	    return this.getToken(CParserParser.SEMICOLON, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(CParserParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(CParserParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(CParserParser.RPAREN, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(CParserParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(CParserParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(CParserParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(CParserParser.RPAREN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_returnStatement;
    }

	RETURN() {
	    return this.getToken(CParserParser.RETURN, 0);
	};

	SEMICOLON() {
	    return this.getToken(CParserParser.SEMICOLON, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitReturnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_expression;
    }

	assignmentExpression() {
	    return this.getTypedRuleContext(AssignmentExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_assignmentExpression;
    }

	conditionalExpression() {
	    return this.getTypedRuleContext(ConditionalExpressionContext,0);
	};

	ASSIGN() {
	    return this.getToken(CParserParser.ASSIGN, 0);
	};

	assignmentExpression() {
	    return this.getTypedRuleContext(AssignmentExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterAssignmentExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitAssignmentExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitAssignmentExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_conditionalExpression;
    }

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	relationalOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalOperatorContext);
	    } else {
	        return this.getTypedRuleContext(RelationalOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterConditionalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitConditionalExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitConditionalExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationalOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_relationalOperator;
    }

	LT() {
	    return this.getToken(CParserParser.LT, 0);
	};

	LE() {
	    return this.getToken(CParserParser.LE, 0);
	};

	GT() {
	    return this.getToken(CParserParser.GT, 0);
	};

	GE() {
	    return this.getToken(CParserParser.GE, 0);
	};

	EQ() {
	    return this.getToken(CParserParser.EQ, 0);
	};

	NE() {
	    return this.getToken(CParserParser.NE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterRelationalOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitRelationalOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitRelationalOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParserParser.PLUS);
	    } else {
	        return this.getToken(CParserParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParserParser.MINUS);
	    } else {
	        return this.getToken(CParserParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_multiplicativeExpression;
    }

	primaryExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimaryExpressionContext);
	    } else {
	        return this.getTypedRuleContext(PrimaryExpressionContext,i);
	    }
	};

	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParserParser.MULT);
	    } else {
	        return this.getToken(CParserParser.MULT, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParserParser.DIV);
	    } else {
	        return this.getToken(CParserParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_primaryExpression;
    }

	ID() {
	    return this.getToken(CParserParser.ID, 0);
	};

	INT() {
	    return this.getToken(CParserParser.INT, 0);
	};

	STRING() {
	    return this.getToken(CParserParser.STRING, 0);
	};

	LPAREN() {
	    return this.getToken(CParserParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(CParserParser.RPAREN, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterPrimaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitPrimaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitPrimaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_functionCall;
    }

	LPAREN() {
	    return this.getToken(CParserParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CParserParser.RPAREN, 0);
	};

	ID() {
	    return this.getToken(CParserParser.ID, 0);
	};

	PRINTF() {
	    return this.getToken(CParserParser.PRINTF, 0);
	};

	argumentList() {
	    return this.getTypedRuleContext(ArgumentListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParserParser.RULE_argumentList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParserParser.COMMA);
	    } else {
	        return this.getToken(CParserParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.enterArgumentList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CParserListener ) {
	        listener.exitArgumentList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CParserVisitor ) {
	        return visitor.visitArgumentList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CParserParser.ProgramContext = ProgramContext; 
CParserParser.DeclarationContext = DeclarationContext; 
CParserParser.VariableDeclarationContext = VariableDeclarationContext; 
CParserParser.FunctionDeclarationContext = FunctionDeclarationContext; 
CParserParser.ParameterListContext = ParameterListContext; 
CParserParser.ParameterContext = ParameterContext; 
CParserParser.TypeContext = TypeContext; 
CParserParser.CompoundStatementContext = CompoundStatementContext; 
CParserParser.StatementContext = StatementContext; 
CParserParser.ExpressionStatementContext = ExpressionStatementContext; 
CParserParser.IfStatementContext = IfStatementContext; 
CParserParser.WhileStatementContext = WhileStatementContext; 
CParserParser.ReturnStatementContext = ReturnStatementContext; 
CParserParser.ExpressionContext = ExpressionContext; 
CParserParser.AssignmentExpressionContext = AssignmentExpressionContext; 
CParserParser.ConditionalExpressionContext = ConditionalExpressionContext; 
CParserParser.RelationalOperatorContext = RelationalOperatorContext; 
CParserParser.AdditiveExpressionContext = AdditiveExpressionContext; 
CParserParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
CParserParser.PrimaryExpressionContext = PrimaryExpressionContext; 
CParserParser.FunctionCallContext = FunctionCallContext; 
CParserParser.ArgumentListContext = ArgumentListContext; 
