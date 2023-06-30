const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  purple: {
    50: "#F72585",
    100: "#B5179E",
    200: "#7209B7",
    300: "#560BAD",
    400: "#480CA8",
  },
  blue: {
    50: "#4CC9F0",
    100: "#4895EF",
    200: "#F72585",
    300: "#3F37C9",
    400: "#3A0CA3",
  },
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
  boxShadow: "#00000033",
};

const font = {
  sizes: {
    ssm: "1rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "2.4rem",
    xl: "3.6rem",
    xxl: "6.4rem",
  },
};

const border = {
  size: "6px",
};

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.white,
  },
  font,
  border,
};
