import React from "react";
import { I18NProvider } from "@mpkelly/react-i18n";
import { HomeLanguageBundle } from "./HomeLanguageBundle";
import { Text, Title } from "../components/Text";

export default () => {
  return (
    <I18NProvider bundles={HomeLanguageBundle}>
      <Title i18n="intro" />
      <Text i18n="summary1" />
      <Text i18n="summary2" />
      <Text i18n={{children:"variable", args:[3]}}/>
    </I18NProvider>
  );
};
