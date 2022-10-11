<template>
	<div class="row">
		<div class="col-12 col-md-6">
			<h2>Our <strong>Menu</strong></h2>
		</div>
		<div class="col-12 col-md-6">
			<div class="input-group mb-3">
				<input type="text" class="form-control" placeholder="Find Your favorit food .." />
				<button class="btn btn-outline-success" type="button" id="button-addon2">
					<font-awesome-icon icon="fas fa-search" />
				</button>
			</div>
		</div>
	</div>

	<div class="row mb-3">
		<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
			<ProductCard />
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
			<ProductCard />
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
			<ProductCard />
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
			<ProductCard />
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
			<ProductCard />
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
			<ProductCard />
		</div>
	</div>
</template>

<script>
	import ProductCard from '@/components/ProductCard.vue';

	export default {
		components: {
			ProductCard,
		},
	};
</script>

<style></style>
