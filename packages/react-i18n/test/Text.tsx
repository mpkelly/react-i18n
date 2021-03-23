import React from "react";
import { withI18N } from "../src";
import {I18NComponentProps} from "../dist";

type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
const Text = (props: TextProps) => <p {...props} />;

export const I18NText = withI18N<TextProps & I18NComponentProps>(Text);
