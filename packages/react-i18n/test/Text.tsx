import React from "react";
import { withI18N } from "../src/withI18N";

type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
const Text = (props: TextProps) => <p {...props} />;

type I18NTextProps = TextProps & { label?: string | any[] };
export const I18NText = withI18N<I18NTextProps>(Text, "label");
