import React from "react";
import { I18NProvider } from "@mpkelly/react-i18n";
import { HomeLanguageBundle } from "./HomeLanguageBundle";
import { Text, Title } from "../components/Text";

export default () => {
  return (
    <I18NProvider bundles={HomeLanguageBundle}>
      <Title label="intro" />
      <Text label="summary1" />
      <Text label="summary2" />
    </I18NProvider>
  );
};
