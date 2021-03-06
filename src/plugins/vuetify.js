import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

//TODO: Change color theme
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        lightgray: "#f8f9fa",
      },
      dark: {
        primary: "#3f51b5",
      },
    },
  },
});
