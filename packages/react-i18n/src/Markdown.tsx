import React, { ReactNode } from "react";

export type MarkdownRule = {
  pattern: RegExp;
  onMatch(match: RegExpMatchArray): ReactNode;
};

export const findRegex = (search: RegExp, text: string) => {
  const matches: RegexMatch[] = [];
  let match: RegExpExecArray | null;
  const globalSearch = new RegExp(search, "g");
  // eslint-disable-next-line no-cond-assign
  while ((match = globalSearch.exec(text)) !== null) {
    matches.push({
      offsets: [match.index, match.index + match[0].length],
      array: match
    });
  }
  return matches;
};

const sortByOffset = (
  a: { match: RegexMatch; rule: MarkdownRule },
  b: { match: RegexMatch; rule: MarkdownRule }
) => a.match.offsets[0] - b.match.offsets[0];

export const transform = (text: string, rules: MarkdownRule[]): ReactNode[] => {
  if (!rules.length) {
    return [text];
  }
  const result: ReactNode[] = [];
  const matches: { match: RegexMatch; rule: MarkdownRule }[] = [];
  let currentText = text;
  // First pass: find matches and positions while blaking out
  // matched areas to avoid duplicates.
  rules.forEach((rule) => {
    findRegex(rule.pattern, currentText).forEach((match) => {
      const erased = Array.from({ length: match.array[0].length })
        .map(() => " ")
        .join("");
      currentText = currentText.replace(match.array[0], erased);
      matches.push({ match, rule });
    });
  });
  if (currentText === text) {
    // no substitutions so return original.
    return [text];
  }
  currentText = text;
  let currentStart = 0;
  // Second pass: rebuild the content as an arrray weaving JSX components
  // in among raw text while maintaining the positions of the original
  // markdown string.
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

export const BoldRule: MarkdownRule = {
  pattern: /(\*\*|__)(.*?)\1/,
  onMatch: (match) => <strong>{match[2]}</strong>
};

export const ItalicRule: MarkdownRule = {
  pattern: /(\*|_)(.*?)\1/,
  onMatch: (match) => <em>{match[2]}</em>
};

export const StrikethroughRule: MarkdownRule = {
  pattern: /~~(.*?)~~/,
  onMatch: (match) => <del>{match[1]}</del>
};

export const InlineCodeRule: MarkdownRule = {
  pattern: /`(.*?)`/,
  onMatch: (match) => <code>{match[1]}</code>
};

export const LinkRule: MarkdownRule = {
  // eslint-disable-next-line no-useless-escape
  pattern: /\[([^\[]+)\]\(([^\)]+)\)/,
  onMatch: (match) => <a href={match[2]}>{match[1]}</a>
};

export const DefaultMarkdownRules = [
  BoldRule,
  ItalicRule,
  InlineCodeRule,
  LinkRule,
  StrikethroughRule
];
