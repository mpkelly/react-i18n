import path from "path";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: path.resolve(__dirname, "src/Index.ts"),
    output: [
      {
        file: path.resolve(__dirname, "dist/index.umd.js"),
        format: "umd",
        name: "ReactI18N"
      },
      {
        file: path.resolve(__dirname, "dist/index.es.js"),
        format: "es"
      }
    ],
    external: ["react", "react-dom/server", "@eo-locale/core"],
    plugins: [
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
    ]
  }
];
