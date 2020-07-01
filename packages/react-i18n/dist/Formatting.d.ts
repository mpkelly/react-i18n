/**
 * Format a `Date` as a string.
 *
 * @param date the `Date` to format.
 * @param options the `Intl.DateTimeFormatOptions` to use - optiona. The system
 * locale default are used if not passed.
 * @param locale the locale to use - optional. The system locale is used if
 * not passed.
 */
export declare const formatDate: (date: Date, options?: Intl.DateTimeFormatOptions | undefined, locale?: string | undefined) => string;
/**
 * Format a `number` as a currency string.
 *
 * @param value the currency amount to format
 * @param currency the currency to use - optional. The system default is
 * used if not passed.
 * @param options the `Intl.NumberFormatOptions` to use when formatting
 * - optional. The default is to use a `style` of "currency".
 * @param locale the locale to use - optional. The system default is used if not passed.
 */
export declare const formatCurrency: (value: number, currency: string, options?: Intl.NumberFormatOptions, locale?: string | undefined) => string;
/**
 * Based on the `count` provided, return a plural or singular string.
 *
 * @param count the count
 * @param singular the text to use when the `count` is singular
 * @param plural the text to use when the `count` is plural
 * @param locale the locale to use - optional. The system default is used
 * if not passed.
 */
export declare const pluralize: (count: number, singular: string, plural: string, locale?: string | undefined) => string;
