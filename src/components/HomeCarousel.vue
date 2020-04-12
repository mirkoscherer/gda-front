<template>
	<v-container class="fill-height" fluid>
		<v-row align="center" justify="center">
			<v-col cols="12" md="8" class="text-center">
				<v-carousel
					cycle
					height="400"
					hide-delimiter-background
					show-arrows-on-hover
				>
					<v-carousel-item v-for="(slide, i) in slides" :key="i">
						<v-sheet color="primary" height="100%">
							<v-row class="fill-height mx-1" align="center" justify="center">
								<div class="display-3">{{ slide.title }}</div>
							</v-row>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "HomeHero",
	components: {},
	data: () => ({
		slides: [
			{
				title: "Cada animal tiene el mismo derecho de estar aca como tu y yo!"
			},
			{ title: "Algo muy profundo" },
			{ title: "Otra cosa más!" }
		]
	})
};
</script>
