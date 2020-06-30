import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
  FC
} from "react";
import { LanguageBundle } from "./LanguageBundle";
import { LanguageBundleSet } from "./LanguageBundleSet";
import { MarkdownRule, DefaultMarkdownRules } from "./Markdown";

type ResolveLanguageBundleFunction = (lang: string) => Promise<LanguageBundle>;

type I18NProviderValue = {
  bundle: LanguageBundle;
  resolveLanguageBundle: ResolveLanguageBundleFunction;
  markdownRules: MarkdownRule[];
  lang?: string;
};

const Context = createContext<I18NProviderValue | undefined>(undefined);

export const useI18N = () => useContext(Context) as I18NProviderValue;

export type I18NProviderProps = {
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
export const I18NProvider: FC<I18NProviderProps> = (
  props: I18NProviderProps
) => {
  const { bundles, children, markdownRules, lang: currentLang } = props;
  const parentContext = useI18N();
  let parentBundle: LanguageBundle | undefined = {};
  let parentLang: string | undefined;
  let parentResolveLanguageBundle: ResolveLanguageBundleFunction | undefined;
  let parentMarkdownRules: MarkdownRule[] = [];
  if (parentContext) {
    parentBundle = parentContext.bundle;
    parentLang = parentContext.lang;
    parentResolveLanguageBundle = parentContext.resolveLanguageBundle;
    parentMarkdownRules = parentContext.markdownRules;
  }
  const allMarkdownRules = (markdownRules || [])
    .filter((rule) => !parentMarkdownRules.includes(rule))
    .concat(parentMarkdownRules);
  const [bundle, setBundle] = useState<LanguageBundle | undefined>();
  const activeLang = currentLang || parentLang;

  if (!activeLang) {
    throw new Error("No `lang` prop specified");
  }

  const resolveLanguageBundle = useCallback(
    (lang: string) =>
      Promise.all([
        new Promise<LanguageBundle>((resolve) => {
          if (parentBundle && lang === parentLang) {
            resolve(parentBundle);
          } else if (parentResolveLanguageBundle) {
            parentResolveLanguageBundle(activeLang).then(resolve);
          } else {
            resolve({});
          }
        }),
        new Promise<LanguageBundle>((resolve) => {
          if (bundles && bundles[lang]) {
            bundles[lang]().then(resolve);
          } else {
            resolve({});
          }
        })
      ]).then((results) => {
        let combined: LanguageBundle = {};
        results.forEach((result) => {
          combined = { ...combined, ...result };
        });
        return combined;
      }),
    [activeLang, parentLang, parentBundle, bundles, parentResolveLanguageBundle]
  );

  useEffect(() => {
    if (!bundle) {
      resolveLanguageBundle(activeLang).then(setBundle);
    }
  }, [bundle, activeLang, parentBundle, bundles, resolveLanguageBundle]);

  if (!bundle) {
    return null;
  }

  const value = {
    resolveLanguageBundle,
    lang: activeLang,
    bundle,
    markdownRules: allMarkdownRules
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

I18NProvider.defaultProps = {
  markdownRules: DefaultMarkdownRules
};
