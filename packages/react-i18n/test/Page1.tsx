import React from "react";
import { I18NText } from "./Text";
import { I18NProvider } from "../src/I18NProvider";

const Page1Bundle = {
  a: () =>
    Promise.resolve({
      //Should override parent bundle in scope below
      2: "a2 override",
      3: "a3"
    }),
  b: () =>
    Promise.resolve({
      3: "b3"
    })
};

export default () => {
  return (
    <I18NProvider bundles={Page1Bundle}>
      <I18NText label="2" id="t2" />
      <I18NText label="3" id="t3" />
    </I18NProvider>
  );
};
