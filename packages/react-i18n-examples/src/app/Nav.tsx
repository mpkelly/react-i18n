import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Text, Title } from "../components/Text";
import { LanguageSelect } from "../components/LanguageSelect";

type Props = {
  language: string;
  onChangeLanguage(): void;
};

export const Nav = (props: Props) => {
  const { language, onChangeLanguage } = props;
  return (
    <Container>
      <Title i18n="brand"  />
      <Link to="/home">
        <Text i18n="home" />
      </Link>
      <Link to="/about">
        <Text i18n="about" />
      </Link>
      <LanguageSelect language={language} onChangeLanguage={onChangeLanguage} />
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  h3 {
    margin-right: auto;
  }
  a {
    margin-left: 16px;
  }
  select {
    margin-left: 16px;
  }
`;
