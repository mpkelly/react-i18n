import React, { useState, lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { I18NProvider } from "@mpkelly/react-i18n";
import { RootLanguageBundle } from "./Root.lang";
import { Page } from "../components/Page";
import { Nav } from "./Nav";

const HomePage = lazy(() => import("../home/HomePage"));
const AboutPage = lazy(() => import("../about/AboutPage"));

export const App = () => {
  const [lang, setLang] = useState("corporate");
  const toggleLanguage = () => {
    setLang((lang) => (lang === "corporate" ? "lorem" : "corporate"));
  };

  return (
    <I18NProvider lang={lang} bundles={RootLanguageBundle}>
      <Router>
        <Page>
          <Nav language={lang} onChangeLanguage={toggleLanguage} />
          <Suspense fallback={<span>Loading...</span>}>
            <Switch>
              <Route exact path={"/home"} component={HomePage} />
              <Route exact path={"/about"} component={AboutPage} />
              <Redirect from="*" to={"/home"} />
            </Switch>
          </Suspense>
        </Page>
      </Router>
    </I18NProvider>
  );
};
