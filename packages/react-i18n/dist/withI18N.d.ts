import { FC } from "react";
/**
 * Add i18n support to the specified component. This HOC allow you declare
 * a property on your component which refernces a key on the `LanguageBundle` currently
 * declared in the closest `I18NProvider`. The key is left down to the caller and should
 * be specified as `propName`.
 *
 * Example:
 *
 * ```
 * <RegularText>Hello</Regular>
 *
 * const I18NText = withI18N(RegularText, "labelFrom")
 *
 * ...
 *
 * <I18NProvider bundles={bundles} lang="en">
 *  <I18NText labelFrom="hello"/>
 * </I18NProvider/>
 *
 *```
 *
 * @param Component the component to wrap
 * @param propName the name of the property which can contain the key which maps
 * to the I18N bundle
 */
export declare function withI18N<T>(Component: FC<T>, propName: string): FC<T>;
