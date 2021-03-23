import React from "react";
import { I18NText } from "./Text";
import { I18NProvider } from "../src";

const Page2Bundle = {
  a: () =>
    Promise.resolve({
      4: "a4"
    }),
  b: () =>
    Promise.resolve({
      4: "b4",
      5: {
        1: {
          a:"b51a override"
        }
      }
    })
};

export default () => {
  return (
    <I18NProvider bundles={Page2Bundle}>
      <I18NText i18n="4" id="t4" />
      <I18NText i18n="5.1.a" id="t6" />
    </I18NProvider>
  );
};
