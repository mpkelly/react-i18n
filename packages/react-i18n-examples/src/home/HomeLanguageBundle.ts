import { LanguageBundleSet } from "@mpkelly/react-i18n";

// Note the import syntax here is not ideal but can be fixed with a small util function
export const HomeLanguageBundle: LanguageBundleSet = {
  corporate: async () => await (await import("./Home.corporate.lang")).default,
  lorem: async () => await (await import("./Home.lorem.lang")).default,
};
