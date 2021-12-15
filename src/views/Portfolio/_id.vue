<template>
	<div class="portfolio-inner">ddd</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters({
				portfolioInner: 'getPortfolioInner',
			}),
			innerData() {
				return {
					list: this.portfolioInner?.item,
				};
			},
		},
		mounted() {
			this.$store.dispatch('fetchPortfolioInner', {
				id: this.$route.params?.id,
			});
		},
	};
</script>

<style></style>
