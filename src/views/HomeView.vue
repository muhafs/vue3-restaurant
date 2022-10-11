<template>
	<div class="container">
		<HeroSection />

		<div class="row justify-content-center align-items-center mb-3">
			<div class="col">
				<h3>Best <strong>Foods</strong></h3>
			</div>

			<div class="col text-end">
				<router-link to="/foods" class="btn btn-success">See more <font-awesome-icon icon="fa-solid fa-angles-right" size="xs" /></router-link>
			</div>
		</div>

		<div class="row justify-content-between align-items-center mb-3">
			<div class="col-md-4">
				<ProductCard />
			</div>

			<div class="col-md-4">
				<ProductCard />
			</div>

			<div class="col-md-4">
				<ProductCard />
			</div>
		</div>
	</div>
</template>

<script>
	import HeroSection from '@/components/HeroSection.vue';
	import ProductCard from '@/components/ProductCard.vue';

	export default {
		components: {
			HeroSection,
			ProductCard,
		},
	};
</script>

<style></style>
