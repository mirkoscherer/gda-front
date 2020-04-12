<template>
	<span>
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item v-for="item in items" :key="item.title" link>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app dark color="primary">
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
				class="hidden-md-and-up"
			/>
			<v-spacer class="hidden-md-and-up"></v-spacer>
			<v-toolbar-title>Granja de Amor</v-toolbar-title>
			<v-btn
				v-for="item in items"
				:key="item.title"
				color="primaryLight"
				class="hidden-sm-and-down ml-3"
			>
				<v-icon>{{ item.icon }}</v-icon>
				{{ item.title }}
			</v-btn>
		</v-app-bar>
	</span>
</template>

<script>
export default {
	name: "AppNavigation",
	props: {
		// source: String
	},
	data: () => ({
		drawer: false,
		items: [
			{ title: "Home", icon: "mdi-home" },
			{ title: "Acerca de", icon: "mdi-information" },
			{ title: "Contacto", icon: "mdi-email" }
		]
	})
};
</script>
