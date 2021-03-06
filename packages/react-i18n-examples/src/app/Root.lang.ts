import {LanguageBundleSet} from "@mpkelly/react-i18n";

export const RootLanguageBundle: LanguageBundleSet = {
  corporate: async () => ({
    brand: "Acme Inc",
    home: "Home",
    about: "About",
    changeLanguage: "change language",
    nested: {
      value: "Root corporate value",
    }
  }),
  lorem: async () => ({
    brand: "Acme Inc",
    home: "Lorem",
    about: "Ipsum",
    changeLanguage: "change language",
    nested: {
      value: "Root lorem value",
    }
  }),
};
