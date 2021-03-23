import React from "react";
import { I18NText } from "./Text";
import { I18NProvider } from "../src";

const Page1Bundle = {
  a: () =>
    Promise.resolve({
      //Should override parent bundle in scope below
      2: "a2 override",
      3: "a3",
    }),
  b: () =>
    Promise.resolve({
      3: "b3"
    })
};

export default () => {
  return (
    <I18NProvider bundles={Page1Bundle}>
      <I18NText i18n={{children:"2"}} id="t2" />
      <I18NText i18n="3" id="t3" />
    </I18NProvider>
  );
};
