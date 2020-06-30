import { LanguageBundle } from "./LanguageBundle";

export type LanguageBundleSet = {
  [key: string]: () => Promise<LanguageBundle>;
};
