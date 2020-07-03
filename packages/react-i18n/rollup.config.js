import path from "path";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

const plugins = [
  typescript(),
  terser({
    toplevel: true,
    compress: {
      passes: 3,
      pure_getters: true,
      unsafe: true
    },
    output: {
      comments: false
    }
  })
];

export default [
  // browser-friendly UMD build
  {
    input: path.resolve(__dirname, "src/Index.ts"),

    output: {
      name: "ReactI18N",
      file: pkg.browser,
      format: "umd"
    },
    external: ["react"],
    plugins: [resolve(), commonjs(), ...plugins]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/Index.ts",
    external: ["ms"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins
  }
];
