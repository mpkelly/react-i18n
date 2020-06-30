import { formatDate, formatCurrency, pluralize } from "./Formatting";
const date = new Date(2020, 6, 30, 10, 33, 30, 0);

describe("Formatting", function () {
  test("date - default", async () => {
    expect(formatDate(date)).toEqual("30/07/2020");
  });

  test("date - with options", async () => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    expect(formatDate(date, options)).toEqual("30 July 2020");
  });

  test("date - with options and locale", async () => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    expect(formatDate(date, options, "en-UK")).toEqual("July 30, 2020");
  });

  test("currency - default", async () => {
    expect(formatCurrency(1.99111, "USD")).toEqual("US$1.99");
  });

  test("currency - with options", async () => {
    expect(
      formatCurrency(1.99111, "USD", {
        maximumFractionDigits: 3,
        style: "currency"
      })
    ).toEqual("US$1.991");
  });

  test("currency - with locale", async () => {
    expect(
      formatCurrency(100000.99111, "USD", undefined, "en-GB").replace(
        /^(\D+)/,
        "$1 "
      )
    ).toEqual("US$ 100,000.99");
  });

  test("pluralize - singular", async () => {
    expect(pluralize(1, "thing", "things")).toEqual("1 thing");
  });

  test("pluralize - plural positive", async () => {
    expect(pluralize(2, "thing", "things")).toEqual("2 things");
  });

  test("pluralize - plural zero", async () => {
    expect(pluralize(0, "thing", "things")).toEqual("0 things");
  });
});
