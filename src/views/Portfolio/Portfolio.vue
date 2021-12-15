<template>
	<div class="portfolio">
		<router-link
			:to="{ name: 'portfolio-inner', params: { id: item.id } }"
			class="portfolio__item"
			:key="item.id"
			v-for="item in porfolios.list"
		>
			<img :src="item.thumb" alt="img" />
			<div class="hover-layer">
				<div class="title">{{ item.name }}</div>
				<div class="teaser">{{ item.description }}</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters({
				portfolioData: 'getPortfolio',
			}),
			porfolios() {
				return {
					list: this.portfolioData?.items,
				};
			},
		},
		mounted() {
			this.$store.dispatch('fetchPortfolio');
		},
	};
</script>

<style lang="scss">
	.portfolio {
		padding: 80px 25px 25px;
		display: grid;
		grid-template-columns: repeat(3, minmax(0px, 1fr));
		grid-gap: 23px;
		@media (max-width: 1320px) {
			grid-template-columns: repeat(2, minmax(0px, 1fr));
		}
		@media (max-width: 1023px) {
			grid-template-columns: repeat(1, minmax(0px, 1fr));
		}
		&__item {
			height: 433px;
			position: relative;
			cursor: pointer;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
				left: 0;
			}
			.hover-layer {
				position: absolute;
				width: 100%;
				height: 100%;
				background: rgba(22, 22, 22, 0.9);
				display: flex;
				justify-content: center;
				flex-direction: column;
				text-align: left;
				padding-left: 70px;
				opacity: 0;
				visibility: hidden;
				transition: 0.4s ease;
				.title {
					position: relative;
					text-align: left;
					color: $white;
					font-size: 18px;
					&::after {
						content: '';
						display: block;
						width: 13px;
						height: 2px;
						margin: 7px 0 10px;
						background: $white;
					}
				}
				.teaser {
					color: $white;
					font-size: 14px;
				}
			}
			&:hover {
				.hover-layer {
					opacity: 1;
					visibility: visible;
				}
			}
		}
	}
</style>
