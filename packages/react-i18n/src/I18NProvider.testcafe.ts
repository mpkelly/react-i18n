import { Selector } from "testcafe";

fixture`I18NProvider tests`.page`../test/index.html`;

/**
 *
 * A simple test that verifies state changes and dynamic
 * bundle loading.
 *
 * See the 'app' in test/Index.tsx
 */

test("Renders initial lang correctly", async (t) => {
  await t.expect(Selector("#t1").textContent).eql("a1");
  await t.expect(Selector("#t2").textContent).eql("a2 override");
  await t.expect(Selector("#t3").textContent).eql("a3");

  await t.click(Selector("#toggleTab"));

  await t.expect(Selector("#t1").textContent).eql("a1");
  await t.expect(Selector("#t2").exists).notOk();
  await t.expect(Selector("#t3").exists).notOk();
  await t.expect(Selector("#t4").textContent).eql("a4");
});

test("Updates on tab change", async (t) => {
  await t.click(Selector("#toggleTab"));

  await t.expect(Selector("#t1").textContent).eql("a1");
  await t.expect(Selector("#t2").exists).notOk();
  await t.expect(Selector("#t3").exists).notOk();
  await t.expect(Selector("#t4").textContent).eql("a4");
});

test("Supports nested values", async (t) => {

  await t.expect(Selector("#t5").textContent).eql("a51a");

  await t.click(Selector("#toggleLang"));

  await t.expect(Selector("#t5").textContent).eql("b51a");

  await t.click(Selector("#toggleTab"));

  await t.expect(Selector("#t6").textContent).eql("b51a override");
});

