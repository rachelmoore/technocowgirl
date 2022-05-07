import Root from "./components"
import link from "@frontity/html2react/processors/link";

const technoChakra = {
  name: "techno-chakra",
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
                "Inconsolata:400",
                "Roboto:400",
              ],
            },
            custom: {
              families: [
                'Produkt Regular:400',
                'Produkt Extralight:200',
              ],
              urls: ['https://technocowgirl.com/Produkt-Regular.ttf', 'https://technocowgirl.com/Produkt-Extralight.ttf']
            }
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

export default technoChakra;
