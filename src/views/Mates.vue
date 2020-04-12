<template>
	<div class="mates">
		<h1>Nuestros compañeros</h1>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="10"
        >
          <v-card
            color="primary"
            dark
          >
            <div class="d-flex flex-no-wrap">
              <v-avatar
                class="ma-3"
                size="250"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>

              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-text v-text="item.text"></v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
	</div>
</template>

<script>

export default {
	name: "Mates",
	components: {},
	data: () => ({
		items: [
			{ title: "Salvador", text: "Es un caballo muy lindo y negro. Le gustan las manzanas y revolcarse en el pasto.", src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg" },
			{ title: "El capitan", text: "Un chancho bien travieso. Le gusta comer y tomarse una siesta en el sofa.", src: "/assets/logo.png" },
			{ title: "Layla", text: "La burra mas rica." }
		]
	}),
	computed: {}
};
</script>