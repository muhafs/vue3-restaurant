<template>
	<NavBar />

	<router-view />

	<FooterSection />
</template>

<script>
	import NavBar from '@/components/NavBar';
	import FooterSection from '@/components/FooterSection';

	export default {
		components: {
			NavBar,
			FooterSection,
		},
	};
</script>
