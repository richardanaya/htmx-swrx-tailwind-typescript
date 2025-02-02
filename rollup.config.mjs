// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/sw.ts",
  output: {
    dir: "dist",
    format: "module",
  },
  plugins: [typescript()],
};
