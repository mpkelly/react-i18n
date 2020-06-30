import { ReactNode } from "react";
export declare type MarkdownRule = {
    pattern: RegExp;
    onMatch(match: RegExpMatchArray): ReactNode;
};
export declare const transform: (text: string, rules: MarkdownRule[]) => ReactNode[];
export declare const BoldRule: MarkdownRule;
export declare const ItalicRule: MarkdownRule;
export declare const StrikethroughRule: MarkdownRule;
export declare const InlineCodeRule: MarkdownRule;
export declare const LinkRule: MarkdownRule;
export declare const DefaultMarkdownRules: MarkdownRule[];
