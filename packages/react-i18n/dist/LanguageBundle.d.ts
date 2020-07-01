import { ReactNode } from "react";
export declare type LanguageBundleFunctionValue = (...args: any[]) => ReactNode;
export declare type LanguageBundleValue = ReactNode | LanguageBundleFunctionValue;
export declare type LanguageBundle = {
    [key: string]: LanguageBundleValue;
};
export declare const importBundle: (path: string, moduleName?: string) => Promise<LanguageBundle>;
