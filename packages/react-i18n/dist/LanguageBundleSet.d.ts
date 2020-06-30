import { LanguageBundle } from "./LanguageBundle";
export declare type LanguageBundleSet = {
    [key: string]: () => Promise<LanguageBundle>;
};
