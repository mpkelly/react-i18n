export type LanguageBundleFunctionValue = (...args: any[]) => string;
export type LanguageBundleValue = string | LanguageBundleFunctionValue;

export type LanguageBundle = {
  [key: string]: LanguageBundleValue;
};

export const importBundle = async (
  path: string,
  moduleName = "default"
): Promise<LanguageBundle> => {
  const module = await import(path);
  return module[moduleName] as LanguageBundle;
};
