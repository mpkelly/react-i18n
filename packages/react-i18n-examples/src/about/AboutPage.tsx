import React from "react";
import { I18NProvider } from "@mpkelly/react-i18n";
import { AboutLanguageBundle } from "./AboutLanguageBundle";
import { Text, Title } from "../components/Text";

export default () => {
  return (
    <I18NProvider bundles={AboutLanguageBundle}>
      <Title i18n={"intro"} />
      <Text i18n="summary1" />
      <Text i18n="summary2" />
      <Text i18n={{children:"intro"}}/>
      <Text i18n={"nested.value"}/>
    </I18NProvider>
  );
};
