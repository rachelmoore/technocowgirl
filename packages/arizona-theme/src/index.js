import Root from "./components"
import link from "@frontity/html2react/processors/link";

const arizonaTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      beforeCSR: () => {
        import("webfontloader").then((WebFontLoader) => {
          WebFontLoader.load({
            google: {
              families: [
                "Rye:400",
              ],
            },
          });
        });
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default arizonaTheme
