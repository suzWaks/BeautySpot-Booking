/** @format */

const COLORS = {
  PRIMARY: "#116CE2",
  BLACK: "#151313",
  WHITE: "#FFFFFF",
  WHITE_BG: "#F4F7FC",
  GRAY: "#8B8B8B",
  WARNING: "#E30029",
  SUCCESS: "#009688",
};

const FONT = {
  regular: "LoraRegular",
  medium: "LoraMedium",
  semiBold: "LoraSemiBold",
  bold: "LoraBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
