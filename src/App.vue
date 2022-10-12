<template>
	<NavBar :items="totalItems" />

	<div class="container">
		<router-view />
	</div>

	<FooterSection />
</template>

<script>
	import NavBar from '@/components/NavBar';
	import FooterSection from '@/components/FooterSection';
	import axios from 'axios';

	export default {
		components: {
			NavBar,
			FooterSection,
		},
		data() {
			return {
				totalItems: [],
			};
		},
		mounted() {
			axios
				.get('http://localhost:3000/carts')
				.then((res) => (this.totalItems = res.data))
				.catch((e) => console.log(e));
		},
	};
</script>
