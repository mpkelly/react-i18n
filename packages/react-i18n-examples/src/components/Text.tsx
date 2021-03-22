import React from "react";
import { withI18N } from "@mpkelly/react-i18n";
import {I18NComponentProps} from "@mpkelly/react-i18n/src";

type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

type ParagraphProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

//These could be your base Text components from your design system
const Heading = (props: HeadingProps) => {
  return <h3 {...props} />;
};

const Paragraph = (props: ParagraphProps) => {
  return <p {...props} />;
};



// Extend the base props with new prop `label`
type TitleProps = HeadingProps & I18NComponentProps;
type TextProps = ParagraphProps & I18NComponentProps;

// Enhance the base text with support for I18N prop `label`
export const Title = withI18N<TitleProps>(Heading);
export const Text = withI18N<TextProps>(Paragraph);
