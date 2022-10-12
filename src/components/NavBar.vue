<template>
	<nav class="navbar navbar-expand-lg">
		<div class="container">
			<router-link class="navbar-brand" to="/">My Restaurant</router-link>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" active-class="active" aria-current="page" to="/">Home</router-link>
					</li>

					<li class="nav-item">
						<router-link class="nav-link" active-class="active" aria-current="page" to="/foods">Foods</router-link>
					</li>
				</ul>

				<ul class="navbar-nav ms-auto">
					<li class="nav-item position-relative d-flex justify-content-end">
						<router-link to="/cart" role="button" class="btn btn-sm btn-dark px-4 position-relative">
							<font-awesome-icon icon="fa-solid fa-cart-shopping" size="xs" />
							Cart
							<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-custom-success">
								{{ items.length }}
								<span class="visually-hidden">Cart Items</span>
							</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		props: ['items'],
	};
</script>

<style></style>
