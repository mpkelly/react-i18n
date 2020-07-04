import React from "react";

type Props = {
  language: string;
  onChangeLanguage(): void;
};

export const LanguageSelect = (props: Props) => {
  const { language, onChangeLanguage } = props;
  return (
    <select value={language} onChange={onChangeLanguage}>
      <option value="corporate">Corporate</option>
      <option value="lorem">Lorem</option>
    </select>
  );
};
