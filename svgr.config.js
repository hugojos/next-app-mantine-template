const path = require("node:path");
// .svgrrc.js
module.exports = {
  template: require("./src/icons/template"),
  jsx: {
    babelConfig: {
      plugins: [
        [
          path.resolve("./src/icons/svgr-dynamic-ids.js"),
          {
            prefix: true,
          },
        ],
      ],
    },
  },
};
