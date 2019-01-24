const ColorNames = {
  mineShaft: "#2C2C2C",
  snowDrift: "#F7FAF7",
  wildSand: "#F4F4F4",
  silver: "#c0c0c0"
};

const StyleVars = {
  Fonts: {
    Global: {
      bodyFontFamily: '"Roboto", sans-serif'
    }
  },
  Colors: {
    Header: {
      bgColor: ColorNames.mineShaft,
      fontColor: ColorNames.snowDrift
    },
    DisplayArea: {
      bgColor: ColorNames.wildSand
    },
    Form: {
      Button: {
        bgColor: ColorNames.mineShaft,
        fontColor: ColorNames.snowDrift,
        borderColor: ColorNames.silver
      }
    }
  }
};

export default StyleVars;
