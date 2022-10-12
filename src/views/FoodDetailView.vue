<template>
	<router-link to="/foods" class="btn btn-dark px-4 mb-3">
		<font-awesome-icon icon="fa-solid fa-angles-left" />
		Back
	</router-link>

	<div class="row shadow rounded py-3" v-if="Object.entries(product).length">
		<div class="col-md-6">
			<img :src="imagePath" class="img-fluid rounded shadow" />
		</div>
		<div class="col-md-6 mt-4 mt-md-0">
			<h4 class="text-center">{{ product.name }}</h4>
			<hr />

			<div class="row mb-3">
				<div class="col-12 col-md-6">
					<p class="text-muted">
						Description :
						<br />
						<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus reprehenderit culpa quas, rem modi.</span>
					</p>
				</div>

				<div class="col-12 col-md-6">
					<div class="mb-3">
						<label for="quantity" class="form-label">Quantity :</label>
						<input type="number" min="1" v-model.number="form.quantity" class="form-control form-sm-control" id="quantity" />
					</div>

					<div class="mb-3">
						<label for="note" class="form-label">Note :</label>
						<textarea v-model="form.note" class="form-control form-sm-control" id="note" rows="2" placeholder="Extra Sauce, Maximum Spice .."></textarea>
					</div>
				</div>
			</div>

			<hr />
			<div class="row">
				<div class="col-6">
					<h6 class="mb-3">Price : {{ currencyFormatter }}</h6>
				</div>
				<div class="col-6 text-end">
					<button class="btn btn-success px-5 px-md-3" @click="addToCart(form)">
						<font-awesome-icon icon="fa-solid fa-cart-shopping" size="xs" />
						add
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { useToast } from 'vue-toastification';

	export default {
		data() {
			return {
				product: {},
				form: {
					quantity: 1,
					note: '',
				},
				toasts: useToast(),
			};
		},
		computed: {
			currencyFormatter() {
				return this.product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
			},
			imagePath() {
				return require('@/assets/images/' + (this.product.image ?? 'default_illustration.png'));
			},
		},
		methods: {
			setProduct(data) {
				this.product = data;
			},
			addToCart(form) {
				form.products = this.product;

				if (form.quantity < 1) {
					this.toasts.warning('Minimum order is 1 Dish', { timeout: 3000 });
					return;
				}

				axios
					.post('http://localhost:3000/carts', form)
					.then((res) => {
						this.$router.push({ path: '/cart' });
						this.toasts.success(res.data.products.name + ' Has Added', {
							timeout: 3000,
						});
					})
					.catch((err) => console.log(err));
			},
		},
		mounted() {
			axios
				.get('http://localhost:3000/products/' + this.$route.params.id)
				.then((result) => this.setProduct(result.data))
				.catch((error) => console.log(error));
		},
	};
</script>

<style></style>
