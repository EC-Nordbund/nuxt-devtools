import * as path from "path";
import * as fs from "fs";
import * as dirs from "global-dirs";

const devToolModule = function () {
  const files = [dirs.npm.binaries, dirs.yarn.binaries]
    .map((dir) => path.join(dir, "vue-devtools"))
    .map((bin) => fs.existsSync(bin));

  if (!files.some((v) => v)) {
    throw "Global devtools not installed";
  }

  console.log(files);

  this.addPlugin({
    src: path.resolve(__dirname, "./plugin.js"),
    mode: "client",
  });
};

export default devToolModule;

// REQUIRED if publishing the module as npm package
export const meta = require("./package.json");
