import {
	BaseTokens,
	ComplexToken,
	NumberToken,
	ParserOptionsWithRequiredPath,
	SimpleToken,
	StringToken,
} from "@internal/parser-core";
import {
	CSSBlock,
	CSSDimension,
	CSSFunction,
	CSSHash,
	CSSIdentifier,
	CSSNumber,
	CSSPercentage,
	CSSRaw,
	CSSWhitespace,
} from "@internal/ast";

export interface CSSParserOptions extends Omit<
	ParserOptionsWithRequiredPath,
	"ignoreWhitespaceTokens"
> {}

export interface DimensionData {
	numberType: string;
	unit: string;
	value: number;
}

export interface HashData {
	hashType?: string;
	value: string;
}

export interface NumberData {
	numberType: string;
	value: number;
}

export type Tokens = BaseTokens & {
	AtKeyword: StringToken<"AtKeyword">;
	BadString: SimpleToken<"BadString">;
	BadURL: SimpleToken<"BadURL">;
	CDC: SimpleToken<"CDC">;
	CDO: SimpleToken<"CDO">;
	Colon: SimpleToken<"Colon">;
	Comma: SimpleToken<"Comma">;
	Comment: StringToken<"Comment">;
	Delim: StringToken<"Delim">;
	Dimension: ComplexToken<"Dimension", DimensionData>;
	Function: StringToken<"Function">;
	Hash: ComplexToken<"Hash", HashData>;
	Ident: StringToken<"Ident">;
	LeftCurlyBracket: SimpleToken<"LeftCurlyBracket">;
	LeftParen: SimpleToken<"LeftParen">;
	LeftSquareBracket: SimpleToken<"LeftSquareBracket">;
	Number: ComplexToken<"Number", NumberData>;
	Percentage: NumberToken<"Percentage">;
	RightCurlyBracket: SimpleToken<"RightCurlyBracket">;
	RightParen: SimpleToken<"RightParen">;
	RightSquareBracket: SimpleToken<"RightSquareBracket">;
	Semi: SimpleToken<"Semi">;
	String: StringToken<"String">;
	URL: StringToken<"URL">;
	Whitespace: SimpleToken<"Whitespace">;
};

export type AnyCSSToken = Tokens[keyof Tokens];

export type AnyCSSValue =
	| CSSFunction
	| CSSBlock
	| CSSDimension
	| CSSPercentage
	| CSSIdentifier
	| CSSNumber
	| CSSHash
	| CSSWhitespace
	| CSSRaw;
