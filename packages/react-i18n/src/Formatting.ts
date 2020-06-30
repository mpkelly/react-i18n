export const formatDate = (
  date: Date,
  options: Intl.DateTimeFormatOptions | undefined = undefined,
  locale: string | undefined = undefined
) => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const formatCurrency = (
  value: number,
  currency?: string,
  options: Intl.NumberFormatOptions = { style: "currency" },
  locale: string | undefined = undefined
) => {
  return new Intl.NumberFormat(locale, { ...options, currency }).format(value);
};

export const pluralize = (
  count: number,
  singular: string,
  plural: string,
  locale: string | undefined = undefined
) => {
  const grammaticalNumber = new Intl.PluralRules(locale).select(count);
  switch (grammaticalNumber) {
    case "one":
      return count + " " + singular;
    case "other":
      return count + " " + plural;
    default:
      throw new Error("Unknown: " + grammaticalNumber);
  }
};
