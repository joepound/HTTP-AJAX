const StyleMixins = {
  makeFlex: (flexDirection, justifyContent, alignItems, flexWrap) => `
    display: flex;
    flex-flow: ${flexDirection || "row"} ${flexWrap || "nowrap"};
    justify-content: ${justifyContent || "flex-start"};
    align-items: ${alignItems || "flex-start"};
  `,
  removeHyperlinkStyling: color => `
    text-decoration: none;
    color: ${color};
  `
};

export default StyleMixins;
