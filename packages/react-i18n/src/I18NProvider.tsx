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

export const useI18N = () => {
  return useContext(Context) as I18NProviderValue;
};

export type I18NProviderProps = {
  children: ReactNode;
  bundles?: LanguageBundleSet;
  lang?: string;
  markdownRules?: MarkdownRule[];
};

export const I18NProvider: FC<I18NProviderProps> = (props) => {
  const { bundles, children, markdownRules, lang: currentLang } = props;
  const parentContext = useI18N();
  let parentBundle: LanguageBundle | undefined = {};
  let parentLang: string | undefined = "";
  let parentResolveLanguageBundle:
    | ResolveLanguageBundleFunction
    | undefined = undefined;
  let parentMarkdownRules: MarkdownRule[] = [];
  if (parentContext) {
    parentBundle = parentContext.bundle;
    parentLang = parentContext.lang;
    parentResolveLanguageBundle = parentContext.resolveLanguageBundle;
    parentMarkdownRules = parentContext.markdownRules;
  }

  const [bundle, setBundle] = useState<LanguageBundle | undefined>();
  const activeLang = currentLang || parentLang;

  if (!activeLang) {
    throw new Error("No `lang` prop specified");
  }

  const resolveLanguageBundle = useCallback(
    (lang: string) => {
      return Promise.all([
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
      });
    },
    [activeLang, parentLang, parentBundle, bundles, parentResolveLanguageBundle]
  );

  useEffect(() => {
    if (!bundle) {
      resolveLanguageBundle(activeLang).then(setBundle);
    }
  }, [activeLang, parentBundle, bundles, resolveLanguageBundle]);

  if (!bundle) {
    return null;
  }

  const value = {
    resolveLanguageBundle,
    lang: activeLang,
    bundle,
    markdownRules: markdownRules || []
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

I18NProvider.defaultProps = {
  markdownRules: DefaultMarkdownRules
};
