import { ReactNode, FC } from "react";
import { LanguageBundle } from "./LanguageBundle";
import { LanguageBundleSet } from "./LanguageBundleSet";
import { MarkdownRule } from "./Markdown";
declare type ResolveLanguageBundleFunction = (lang: string) => Promise<LanguageBundle>;
declare type I18NProviderValue = {
    bundle: LanguageBundle;
    resolveLanguageBundle: ResolveLanguageBundleFunction;
    markdownRules: MarkdownRule[];
    lang?: string;
};
export declare const useI18N: () => I18NProviderValue;
export declare type I18NProviderProps = {
    children: ReactNode;
    bundles?: LanguageBundleSet;
    lang?: string;
    markdownRules?: MarkdownRule[];
};
export declare const I18NProvider: FC<I18NProviderProps>;
export {};
