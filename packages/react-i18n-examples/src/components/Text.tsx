import React from "react";
import { withI18N } from "@mpkelly/react-i18n";

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

type I18Text = { label?: string | any[] };

// Extend the base props with new prop `label`
type TitleProps = Omit<HeadingProps, "label"> & I18Text;
type TextProps = Omit<ParagraphProps, "label"> & I18Text;

// Enhance the base text with support for I18N prop `label`
export const Title = withI18N<TitleProps>(Heading, "label");
export const Text = withI18N<TextProps>(Paragraph, "label");
