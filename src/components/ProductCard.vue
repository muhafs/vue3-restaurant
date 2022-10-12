<template>
	<div class="card shadow">
		<img :src="require('@/assets/images/' + product.image)" class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{{ product.name }}</h5>

			<!-- <h6 class="card-subtitle mb-2 text-muted">Indian rice with chicken</h6> -->

			<p class="card-text">Price : {{ currency }}</p>

			<router-link :to="`/foods/${product.id}`" class="btn btn-success">
				<font-awesome-icon icon="fa-solid fa-cart-shopping" size="xs" />
				Order
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['product'],
		data() {
			return {};
		},
		computed: {
			currency() {
				return this.product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
			},
		},
	};
</script>

<style></style>
