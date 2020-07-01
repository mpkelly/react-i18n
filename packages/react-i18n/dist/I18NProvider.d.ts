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
    /**
     * The React `children` to render.
     */
    children: ReactNode;
    /**
     * The `LanguageBundleSet` to use. As `react-i18n` supports a
     * heirachy of `I18NProviders`, this is optional and will be inherited from
     * the parent `I18NProvider` if not set. In any case, the parent's `LanguageBundle`
     * for the current `lang` is merged into this provider's bundle internally.
     */
    bundles?: LanguageBundleSet;
    /**
     * The current language. This should be a key on this provider's `bundles` property
     * or on a parent bundle.
     */
    lang?: string;
    /**
     * `LanguageBundle` strings support markdown by default. You can disable this
     *  by passing an empty array and also replace the default rules (bold, italic, inline code,
     *  strikethrough and links) by passing a non-empty array.
     * )
     */
    markdownRules?: MarkdownRule[];
};
/**
 *
 * A `Context.Provider` which makes `LanguageBundles` available to child components
 * via the `useI18N` hook or the `withI18N` higher order component.
 *
 * @param props see `I18NProviderProps`
 */
export declare const I18NProvider: FC<I18NProviderProps>;
export {};
