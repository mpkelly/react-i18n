import { LanguageBundleSet, pluralize } from "@mpkelly/react-i18n";

const english = {
  hello: "Hi!",
};

const german = {
  hello: "Hallo",
  bye: "Tschüss",
  markdown:
    "This is **bold** and *italic*? And more **bold** and some `code` plus [this is a link](www.google.com). ~~test~~",
};

export const RootBundle: LanguageBundleSet = {
  en: () => Promise.resolve(english),
  de: () => Promise.resolve(german),
};
