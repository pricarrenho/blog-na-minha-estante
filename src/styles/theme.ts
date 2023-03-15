const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  fuchsia: {
    50: "#FDF4FF",
    100: "#FAE8FF",
    200: "#F5D0FE",
    300: "#F0ABFC",
    400: "#E879F9",
    500: "#D946EF",
    600: "#C026D3",
    700: "#A21CAF",
    800: "#86198F",
    900: "#701A75",
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
    xl: "3.2rem",
    xxl: "6.4rem",
  },
};

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.fuchsia[50],
  },
  font,
};
