import React from "react";

type Props = {
  onChangeLanguage(): void;
};

export const LanguageSelect = (props: Props) => {
  const { onChangeLanguage } = props;
  return (
    <select onChange={onChangeLanguage}>
      <option>Lorem</option>
      <option>Corporate</option>
    </select>
  );
};
