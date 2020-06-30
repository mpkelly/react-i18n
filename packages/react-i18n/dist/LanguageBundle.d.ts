export declare type LanguageBundleFunctionValue = (...args: any[]) => string;
export declare type LanguageBundleValue = string | LanguageBundleFunctionValue;
export declare type LanguageBundle = {
    [key: string]: LanguageBundleValue;
};
export declare const importBundle: (path: string, moduleName?: string) => Promise<LanguageBundle>;
