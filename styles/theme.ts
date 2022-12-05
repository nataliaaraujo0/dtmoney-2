import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    colorCustom: {
      "70": "#000058",
      "90": "#00002c",
    },
  },

  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#161526",
        color: "gray.100",
      },
    },
  },
});
