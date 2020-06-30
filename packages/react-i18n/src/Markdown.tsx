import React, { ReactNode } from "react";

export type MarkdownRule = {
  pattern: RegExp;
  onMatch(match: RegExpMatchArray): ReactNode;
};

export const transform = (text: string, rules: MarkdownRule[]): ReactNode[] => {
  const result: ReactNode[] = [];
  const matches: { match: RegexMatch; rule: MarkdownRule }[] = [];
  let currentText = text;
  rules.forEach((rule) => {
    findRegex(rule.pattern, currentText).forEach((match) => {
      const erased = Array.from({ length: match.array[0].length })
        .map((i) => " ")
        .join("");
      currentText = currentText.replace(match.array[0], erased);
      matches.push({ match, rule });
    });
  });
  if (currentText == text) {
    // no substitutions.
    return [text];
  }
  currentText = text;
  let currentStart = 0;
  matches.sort(sortByOffset).forEach((match, index) => {
    const [start, end] = match.match.offsets;
    const before = currentText.substring(currentStart, start);
    if (before) {
      result.push(before);
    }
    result.push(match.rule.onMatch(match.match.array));
    currentStart = end;
    if (index + 1 === matches.length) {
      const after = currentText.substring(currentStart);
      if (after) {
        result.push(after);
      }
    }
  });
  return result;
};

type RegexMatch = { offsets: number[]; array: RegExpMatchArray };

const sortByOffset = (
  a: { match: RegexMatch; rule: MarkdownRule },
  b: { match: RegexMatch; rule: MarkdownRule }
) => {
  return a.match.offsets[0] - b.match.offsets[0];
};

const findRegex = (search: RegExp, text: string) => {
  const matches: RegexMatch[] = [];
  let match: RegExpExecArray | null;
  const globalSearch = new RegExp(search, "g");
  while ((match = globalSearch.exec(text)) !== null) {
    matches.push({
      offsets: [match.index, match.index + match[0].length],
      array: match
    });
  }
  return matches;
};

export const BoldRule: MarkdownRule = {
  pattern: /(\*\*|__)(.*?)\1/,
  onMatch: (match) => {
    return <strong>{match[2]}</strong>;
  }
};

export const ItalicRule: MarkdownRule = {
  pattern: /(\*|_)(.*?)\1/,
  onMatch: (match) => {
    return <em>{match[2]}</em>;
  }
};

export const StrikethroughRule: MarkdownRule = {
  pattern: /\~\~(.*?)\~\~/,
  onMatch: (match) => {
    return <del>{match[1]}</del>;
  }
};

export const InlineCodeRule: MarkdownRule = {
  pattern: /`(.*?)`/,
  onMatch: (match) => {
    return <code>{match[1]}</code>;
  }
};

export const LinkRule: MarkdownRule = {
  pattern: /\[([^\[]+)\]\(([^\)]+)\)/,
  onMatch: (match) => {
    return <a href={match[2]}>{match[1]}</a>;
  }
};

export const DefaultMarkdownRules = [
  BoldRule,
  ItalicRule,
  InlineCodeRule,
  LinkRule,
  StrikethroughRule
];
