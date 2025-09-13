const { types: t, template } = require("@babel/core");

const getValueWithProps = (value, { prefix }) =>
  `${prefix ? "${props.idprefix || ''}" : ""}${value}`;

const isHexValue = (value) =>
  typeof value === "string" &&
  value.startsWith("#") &&
  !Number.isNaN(parseInt(value.slice(1), 16));

const createJsxExpression = (value) =>
  t.jsxExpressionContainer(template.ast(`\`${value}\``).expression);

const getAttributeValue = (value, opts) => {
  if (typeof value !== "string" || isHexValue(value)) return;

  const idMatch = value.match(/^#(.+)/);
  const urlMatch = value.match(/^url\(#(.+)\)$/);

  if (idMatch) {
    return createJsxExpression(`#${getValueWithProps(idMatch[1], opts)}`);
  }

  if (urlMatch) {
    return createJsxExpression(`url(#${getValueWithProps(urlMatch[1], opts)})`);
  }
};

const getIdValue = (value, opts) =>
  typeof value === "string"
    ? createJsxExpression(getValueWithProps(value, opts))
    : null;

const plugin = (_, opts) => ({
  visitor: {
    JSXAttribute(path) {
      if (!opts.prefix) return;

      const { value } = path.get("value")?.container || {};
      const { name } = path.get("name")?.container || {};

      if (typeof value !== "string") return;

      if (name === "id") {
        const idValue = getIdValue(value, opts);
        if (idValue) path.get("value").replaceWith(idValue);
      } else {
        const attr = getAttributeValue(value, opts);
        if (attr) path.get("value").replaceWith(attr);
      }
    },
  },
});

module.exports = plugin;
