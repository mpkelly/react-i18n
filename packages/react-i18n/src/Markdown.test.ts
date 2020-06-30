import ReactDOMServer from "react-dom/server";
import { transform, DefaultMarkdownRules } from "./Markdown";

describe("Markdown", function () {
  test("bold", async () => {
    expect(
      html(transform("this **is** bold **text**", DefaultMarkdownRules) as any)
    ).toEqual("this  <strong >is</strong>  bold  <strong >text</strong>");
  });

  test("italic", async () => {
    expect(
      html(transform("this *is* italic *text*", DefaultMarkdownRules) as any)
    ).toEqual("this  <em >is</em>  italic  <em >text</em>");
  });

  test("code", async () => {
    expect(
      html(transform("this `is` code `text`", DefaultMarkdownRules) as any)
    ).toEqual("this  <code >is</code>  code  <code >text</code>");
  });

  test("strikethrough", async () => {
    expect(
      html(
        transform(
          "this ~~is~~ strikethrough ~~text~~",
          DefaultMarkdownRules
        ) as any
      )
    ).toEqual("this  <del >is</del>  strikethrough  <del >text</del>");
  });

  test("links", async () => {
    expect(
      html(
        transform(
          "this is a [link](url) and [another](url) ",
          DefaultMarkdownRules
        ) as any
      )
    ).toEqual(
      'this is a  <a href="url" >link</a> and  <a href="url" >another</a> '
    );
  });

  test("none", async () => {
    expect(html(transform("no markdown", DefaultMarkdownRules) as any)).toEqual(
      "no markdown"
    );
  });

  test("mixed", async () => {
    expect(
      html(
        transform(
          "*bold* and *italic* and *bold* with [links](url) and ~~strikethrough~~ and `code`. ",
          DefaultMarkdownRules
        ) as any
      )
    ).toEqual(
      '<em >bold</em>  and  <em >italic</em>  and  <em >bold</em>  with  <a href="url" >links</a> and  <del >strikethrough</del>  and  <code >code</code> . '
    );
  });
});

const html = (raw: JSX.Element[]) =>
  raw
    .map((element) => ReactDOMServer.renderToString(element))
    .join(" ")
    .split(/data-reactroot=\"\"/g)
    .join("")
    .split('"(')
    .join('"')
    .split("> )")
    .join(">");
