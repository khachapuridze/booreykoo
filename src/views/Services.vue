<template>
	<div class="services">
		<div class="services__top">
			<div class="services__title">{{ services.title }}</div>
			<p class="services__teaser">
				{{ services.teaser }}
			</p>
		</div>
		<div class="flex-box">
			<div class="services__left">
				<h3>{{ services.sideBarTitle }}</h3>
			</div>
			<div class="services__center">
				<div class="grid">
					<div
						class="service-item"
						:key="service.id"
						v-for="service in services.list"
					>
						<div class="title">{{ service.name }}</div>
						<p class="teaser">
							{{ service.body }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters({
				serviceData: 'getServiceData',
			}),
			services() {
				return {
					list: this.serviceData?.items,
					title: this.serviceData?.title,
					sideBarTitle: this.serviceData?.sidebar_title,
					teaser: this.serviceData?.body,
				};
			},
		},
		mounted() {
			this.$store.dispatch('fetchServices');
		},
	};
</script>

<style lang="scss">
	.services {
		&__top {
			padding-top: 86px;
			padding-bottom: 19px;

			padding-left: 221px;
		}
		&__left {
			width: 221px;
			height: calc(100vh - 186px);
			background: $yellow;
			display: flex;
			justify-content: center;
			align-items: center;
			h3 {
				font-size: 24px;

				transform: rotate(-90deg);
			}
		}
		&__center {
			background: $black;
			width: 100%;
			height: calc(100vh - 186px);
			overflow: auto;

			padding-top: 100px;
			padding-left: 100px;
			padding-right: 50px;
			.grid {
				display: grid;
				grid-template-columns: repeat(3, minmax(0px, 1fr));
				grid-gap: 50px;
				height: fit-content;
				@media (max-width: 1319px) {
					grid-template-columns: repeat(2, minmax(0px, 1fr));
				}
				@media (max-width: 1023px) {
					grid-template-columns: repeat(1, minmax(0px, 1fr));
				}
			}

			.service-item {
				max-width: 350px;
				.title {
					text-align: left;
					font-size: 24px;
					color: $white;
					line-height: 28px;
				}
				.teaser {
					text-align: left;

					font-size: 14px;
					color: $white;
				}
			}
		}
		&__title {
			font-size: 14px;
			position: relative;
			text-align: left;
			color: $black;

			&::after {
				content: '';
				display: block;
				width: 13px;
				height: 2px;
				margin: 10px 0 12px;
				background: $black2;
			}
		}
		&__teaser {
			font-size: 14px;
			text-align: left;
			color: $black;
		}
	}
</style>
