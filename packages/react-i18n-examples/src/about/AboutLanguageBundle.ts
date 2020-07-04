import { LanguageBundleSet } from "@mpkelly/react-i18n";

export const AboutLanguageBundle: LanguageBundleSet = {
  corporate: async () => await (await import("./About.corporate.lang")).default,
  lorem: async () => await (await import("./About.lorem.lang")).default,
};
