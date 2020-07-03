import { ReactNode } from "react";
export declare type MarkdownRule = {
    pattern: RegExp;
    onMatch(match: RegExpMatchArray, key?: any): ReactNode;
};
export declare const findRegex: (search: RegExp, text: string) => RegexMatch[];
export declare const transform: (text: string, rules: MarkdownRule[]) => ReactNode[];
declare type RegexMatch = {
    offsets: number[];
    array: RegExpMatchArray;
};
export declare const BoldRule: MarkdownRule;
export declare const ItalicRule: MarkdownRule;
export declare const StrikethroughRule: MarkdownRule;
export declare const InlineCodeRule: MarkdownRule;
export declare const LinkRule: MarkdownRule;
export declare const DefaultMarkdownRules: MarkdownRule[];
export {};
