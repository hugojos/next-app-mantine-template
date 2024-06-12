const path = require("path");
// .svgrrc.js
module.exports = {
  ref: true,
  jsx: {
    babelConfig: {
      plugins: [
        [
          path.resolve("./svgr-dynamic-ids.js"),
          {
            prefix: true,
          },
        ],
      ],
    },
  },
}