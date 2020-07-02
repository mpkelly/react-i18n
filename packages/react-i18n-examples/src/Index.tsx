import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { I18NProvider, useI18N } from "@mpkelly/react-i18n";
import { RootBundle } from "./RootBundle";
import NestedBundle from "./NestedBundle";
import { Text } from "./Text";

export default function App() {
  const [lang, setLang] = useState("en");
  setTimeout(() => setLang("de"), 2000);
  return (
    <I18NProvider lang={lang} bundles={RootBundle}>
      <Root />
    </I18NProvider>
  );
}

const Root = () => {
  const { lang, bundle } = useI18N();
  return (
    <div className="App">
      <h1>
        {bundle["hello"]} is set for {lang}
      </h1>
      <Sub />
    </div>
  );
};

const Sub = () => {
  return (
    <I18NProvider bundles={NestedBundle}>
      <h2>Sub Component</h2>
      <SubComponent />
    </I18NProvider>
  );
};

const SubComponent = () => {
  const { lang } = useI18N();
  return (
    <Fragment>
      <Text>Current lang: {lang}</Text>
      <br />
      <Text label={"hello"} />
      <br />
      <Text label={"markdown"} />
      <br />
      <Text label={"bye"} />
      <br />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
