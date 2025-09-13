const template = (variables, { tpl }) => {
  return tpl`
    ${variables.imports};
    import { Icon } from "lkd-web-kit"

    ${variables.interfaces};

    const svg = (${variables.props}) => (
      ${variables.jsx}
    );

    const ${variables.componentName} = (props) => (
      <Icon i={svg} {...props} />
    );

    ${variables.exports};
  `;
};

module.exports = template;
