import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: true,
		options: {
			customProperties: true
		},
		themes: {
			dark: {
				primary: colors.lightGreen.darken4,
				primaryLight: colors.lightGreen.darken2,
				secondary: colors.yellow
			}
		}
	}
});
