<template>
	<div class="row mb-3">
		<div class="col-12 col-md-6">
			<h2>My <strong>Cart</strong></h2>
		</div>
	</div>

	<div class="row mb-3">
		<div class="table-responsive">
			<table class="table text-center align-middle">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Image</th>
						<th scope="col">Dish</th>
						<th scope="col">Note</th>
						<th scope="col">Quantity</th>
						<th scope="col">Price</th>
						<th scope="col">Total Price</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, i) in totalItems" :key="item.id">
						<th scope="row">{{ i + 1 }}</th>
						<td>
							<img :src="require('@/assets/images/' + (item.products.image ?? 'default_illustration.png'))" alt="" class="img-fluid img-thumbnail shadow" width="250" />
						</td>
						<td>{{ item.products.name }}</td>
						<td>{{ item.note || '-' }}</td>
						<td>{{ item.quantity }}</td>
						<td>{{ item.products.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</td>
						<td>{{ (item.products.price * item.quantity).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</td>
						<td>
							<font-awesome-icon icon="fa-solid fa-trash-can" class="text-danger" role="button" @click="removeItem(item.id)" />
						</td>
					</tr>
					<tr>
						<td colspan="6" class="text-end">Total Payment :</td>
						<td colspan="2" class="text-center">{{ totalPayment }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<div class="row justify-content-end">
		<div class="col-md-4">
			<div class="row">
				<div class="mb-3">
					<label for="name" class="form-label">Name :</label>
					<input type="text" v-model="form.name" class="form-control form-sm-control" id="name" placeholder="John Doe" />
				</div>

				<div class="mb-3">
					<label for="table_number" class="form-label">Table :</label>
					<input type="text" v-model="form.table_number" class="form-control form-sm-control" id="table_number" placeholder="T20" />
				</div>

				<div class="mb-3 text-end">
					<button class="btn btn-success d-block w-100 d-md-inline" @click="checkout()">
						<font-awesome-icon icon="fa-solid fa-cart-shopping" size="xs" />
						Checkout
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { useToast } from 'vue-toastification';
	import axios from 'axios';

	export default {
		data() {
			return {
				totalItems: [],
				form: {
					name: '',
					table_number: '',
				},
				toasts: useToast(),
			};
		},
		computed: {
			totalPayment() {
				return this.totalItems
					.map((item) => item.quantity * item.products.price)
					.reduce((acc, curr) => acc + curr, 0)
					.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
			},
		},
		methods: {
			removeItem(id) {
				axios
					.delete('http://localhost:3000/carts/' + id)
					.then(() => {
						this.toasts.success('Item Has Been Deleted', {
							timeout: 3000,
						});

						axios
							.get('http://localhost:3000/carts')
							.then((res) => (this.totalItems = res.data))
							.catch((e) => console.log(e));
					})
					.catch((e) => console.log(e));
			},
			checkout() {
				if (this.form.name == '' || this.form.table_number == '') {
					this.toasts.error('Name and Table Number are Required !!', {
						timeout: 3000,
					});
					return;
				}

				this.form.products = this.totalItems;

				axios
					.post('http://localhost:3000/orders', this.form)
					.then(() => {
						this.totalItems.map((item) => {
							axios.delete('http://localhost:3000/carts/' + item.id).catch((e) => console.log(e));
						});

						this.$router.push({ path: '/success' });
						this.toasts.success('Yeyy, your food is cooking!', {
							timeout: 3000,
						});
					})
					.catch((e) => console.log(e));
			},
		},
		mounted() {
			axios
				.get('http://localhost:3000/carts')
				.then((res) => (this.totalItems = res.data))
				.catch((e) => console.log(e));
		},
	};
</script>

<style></style>
