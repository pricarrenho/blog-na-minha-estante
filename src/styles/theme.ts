const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  pink50: "#f7edf4",
  pink100: "#F5D5ED",
  pink200: "#EBB9DF",
  pink300: "#D991BA",
  pink400: "#D946EF",
  neutral50: "#F5F5F5",
  neutral200: "#D4D4D4",
  neutral400: "#737373",
  neutral800: "#171717",
};

const font = {
  sizes: {
    sm: "1.4rem",
    md: "1.6rem",
    lg: "2.4rem",
    xl: "3.2rem",
  },
};

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.pink50,
  },
  font,
};
