import React, { forwardRef, FC, ReactNode } from "react";
import { useI18N } from "./I18NProvider";
import { transform } from "./Markdown";

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
export function withI18N<T>(Component: FC<T>, propName: keyof T) {
  return forwardRef<HTMLElement, T>((props, ref) => {
    const { bundle, markdownRules } = useI18N();
    let hocProps = props;
    if (bundle && props[propName]) {
      const value = props[propName] as any;
      let children: ReactNode | ReactNode[] = "";
      if (value.constructor === Array) {
        const [label, ...args] = value;
        if (bundle[label]) {
          children = (bundle[label] as Function)(...args);
        }
      } else {
        children = bundle[value] as string;
        if (!children) {
          // eslint-disable-next-line no-console
          console.warn(`No i18n value found for key: ${value}`);
        }
      }
      if (children) {
        children = transform(children as string, markdownRules);
        hocProps = { ...props, children };
      }
    }
    return <Component {...hocProps} ref={ref} />;
  });
}
