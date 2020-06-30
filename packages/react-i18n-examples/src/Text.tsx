import React from "react";
import { withI18N } from "@mpkelly/react-i18n";

type SpanProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type Props = Omit<SpanProps, "label"> & { label?: string | any[] };

const SpanText = (props: Props) => {
  return <span {...props} />;
};

export const Text = withI18N(SpanText, "label");
