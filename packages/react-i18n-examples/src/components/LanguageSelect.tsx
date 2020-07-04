import React from "react";

type Props = {
  onChangeLanguage(): void;
};

export const LanguageSelect = (props: Props) => {
  const { onChangeLanguage } = props;
  return (
    <select onChange={onChangeLanguage}>
      <option>Corporate</option>
      <option>Lorem</option>
    </select>
  );
};
