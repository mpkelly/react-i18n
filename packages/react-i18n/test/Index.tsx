import React, { useState, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { I18NProvider } from "../src/I18NProvider";
import { LanguageBundleSet } from "../src/LanguageBundleSet";
import { LanguageBundle } from "../src/LanguageBundle";
import { I18NText } from "./Text";

const a: LanguageBundle = {
  1: "a1",
  2: "b2"
};

const b: LanguageBundle = {
  1: "b1",
  2: "b2"
};

const root: LanguageBundleSet = {
  a: () => Promise.resolve(a),
  b: () => Promise.resolve(b)
};

const Page1 = lazy(() => import("./Page1"));
const Page2 = lazy(() => import("./Page2"));

export const App = () => {
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState("a");

  const handleToggleLang = () => {
    setLang((lang) => (lang === "a" ? "b" : "a"));
  };

  const handleToggleTab = () => {
    setTab((tab) => (tab === 0 ? 1 : 0));
  };

  return (
    <I18NProvider lang={lang} bundles={root}>
      <I18NText label="1" id="t1" />
      <button onClick={handleToggleLang} id="toggleLang">
        toggle lang
      </button>
      <button onClick={handleToggleTab} id="toggleTab">
        toggle tab
      </button>
      <Suspense fallback={<span>Loading...</span>}>
        {tab === 0 ? <Page1 /> : <Page2 />}
      </Suspense>
    </I18NProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
