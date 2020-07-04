import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Text, Title } from "../components/Text";
import { LanguageSelect } from "../components/LanguageSelect";

type Props = {
  onChangeLanguage(): void;
};

export const Nav = (props: Props) => {
  const { onChangeLanguage } = props;
  return (
    <Container>
      <Title label="brand" />
      <Link to="/home">
        <Text label="home" />
      </Link>
      <Link to="/about">
        <Text label="about" />
      </Link>
      <LanguageSelect onChangeLanguage={onChangeLanguage} />
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
