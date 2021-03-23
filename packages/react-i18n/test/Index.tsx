import React, { useState, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { I18NProvider } from "../src";
import { LanguageBundleSet } from "../src";
import { LanguageBundle } from "../src";
import { I18NText } from "./Text";

const a: LanguageBundle = {
  1: "a1",
  2: "b2",
  5: {
    1: {
      a:"a51a"
    }
  }
};

const b: LanguageBundle = {
  1: "b1",
  2: "b2",
  5: {
    1: {
      a:"b51a"
    }
  }
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
      <I18NText i18n="1" id="t1" />
      <I18NText i18n={"5.1.a"} id="t5" />
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
