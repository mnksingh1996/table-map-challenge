const colors = {
  dark__green: "#80c464",
  medium__green: "#a7c941",
  light__green: "#ebf2d3",
  sea__green: "#00968a",
  dark__grey: "#929bac",
  light__grey: "#f4f5f7",
  dark__yellow: "#fff2cd",
  light__yellow: "#fff8e5",
  black: "#1f1f1f",
  dark__blue: "#0079d6",
  light__blue: "#7fbce9",
  white: "#ffffff"
};

const theme = {
  light: { ...colors },
  dark: {
    ...colors,
    light__yellow: colors.light__green,
    light__green: colors.light__yellow,
    sea__green: colors.medium__green,
    medium__green: colors.sea__green,
    dark__yellow: colors.sea__green,
    dark__blue: colors.light__blue,
    light__blue: colors.dark__blue,
    white: colors.black,
    black: colors.white
  }
};

export default theme;
