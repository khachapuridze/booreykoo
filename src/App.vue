<template>
	<div id="app">
		<div
			class="burger"
			@click="open = true"
			:class="{ white: $route.name == 'Home' }"
		>
			<div class="burger__item"></div>
			<div class="burger__item"></div>
		</div>
		<div class="side-menu" :class="{ active: open }">
			<div class="side-menu__close" @click="open = false">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="h-7 w-7"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</div>
			<div class="side-menu__list">
				<router-link
					v-for="(menu, indx) in menuData.menu"
					:key="indx"
					class="menu-link"
					:to="menu.url"
					>{{ menu.name }}</router-link
				>
				<span>{{ menuData.menu_text }}</span>
				<div class="socials flex-box">
					<a target="_blank" :href="menuData.socialFb">
						<svg
							width="15"
							height="26"
							viewBox="0 0 15 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.6503 14.6589L14.363 10.0102H9.90048V6.98932C9.90048 5.7178 10.5241 4.47867 12.5164 4.47867H14.5411V0.526427C14.5411 0.526427 12.7027 0.210571 10.9452 0.210571C7.27645 0.210571 4.87109 2.43776 4.87109 6.46289V10.0021H0.797363V14.6508H4.87919V25.5519H9.90048V14.6589H13.6503Z"
								fill="#161616"
							/>
						</svg>
					</a>
					<a target="_blank" :href="menuData.socialInst">
						<svg
							width="27"
							height="26"
							viewBox="0 0 27 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.5574 6.48718C10.083 6.48718 7.26459 9.31368 7.26459 12.78C7.26459 16.2544 10.0911 19.0728 13.5574 19.0728C17.0318 19.0728 19.8502 16.2463 19.8502 12.78C19.8502 9.30559 17.0237 6.48718 13.5574 6.48718ZM13.5574 16.8132C11.3302 16.8132 9.52417 15.0072 9.52417 12.78C9.52417 10.5528 11.3302 8.74676 13.5574 8.74676C15.7765 8.74676 17.5906 10.5528 17.5906 12.78C17.5906 15.0072 15.7765 16.8132 13.5574 16.8132Z"
								fill="#161616"
							/>
							<path
								d="M18.5546 25.56H8.35002C4.11431 25.56 0.672302 22.118 0.672302 17.8823V7.67772C0.672302 3.44201 4.11431 0 8.35002 0H18.5546C22.7903 0 26.2323 3.44201 26.2323 7.67772V17.8823C26.2323 22.1099 22.7822 25.56 18.5546 25.56ZM8.35002 2.40536C5.44253 2.40536 3.07766 4.77023 3.07766 7.67772V17.8823C3.07766 20.7898 5.44253 23.1546 8.35002 23.1546H18.5546C21.4621 23.1546 23.8269 20.7898 23.8269 17.8823V7.67772C23.8269 4.77023 21.4621 2.40536 18.5546 2.40536H8.35002V2.40536Z"
								fill="#161616"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<router-view />
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';

	export default {
		data() {
			return {
				open: false,
			};
		},
		computed: {
			...mapGetters({
				menuList: 'getMenu',
			}),
			menuData() {
				console.log(this.menuList?.menu_items, 'this.menuList?.menu_itemsdd');
				return {
					menu: this.menuList?.menu_items,
					menu_text: this.menuList?.menu_text,
					socialFb: this.menuList?.social_items
						? this.menuList?.social_items[0]?.url
						: '',
					socialInst: this.menuList?.social_items
						? this.menuList?.social_items[1]?.url
						: '',
				};
			},
		},
		watch: {
			$route: {
				handler() {
					this.open = false;
				},
			},
		},
		mounted() {
			this.$store.dispatch('fethMenu');
		},
	};
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.burger {
		position: fixed;
		top: 30px;
		right: 30px;
		z-index: 1;
		cursor: pointer;
		&.white {
			.burger__item {
				background: $white;
			}
		}
		&__item {
			width: 25px;
			height: 3px;
			background: $black;
			border-radius: 4px;
			&:first-child {
				margin-bottom: 10px;
			}
		}
	}
	.side-menu {
		position: fixed;
		z-index: 1;
		right: 0;
		background: $yellow;
		width: 346px;
		height: 100vh;
		transition: 0.4s ease;
		display: flex;
		flex-direction: column;
		transform: translateX(100%);
		// @media (max-width: 767px) {
		// 	width: 100%;
		// }

		&.active {
			transform: translateX(0);
		}
		&__close {
			width: 22px;
			cursor: pointer;
			position: absolute;
			top: 30px;
			right: 40px;
			svg {
				stroke: $black;
				transition: 0.2s ease;

				&:hover {
					stroke: $white;
				}
			}
		}
		&__list {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 20vh;
			left: 98px;
			.menu-link {
				font-size: 32px;
				color: $black;
				position: relative;
				&::before {
					content: '';
					visibility: hidden;
					opacity: 0;
					width: 21px;
					height: 3px;
					background-color: #161616;
					position: absolute;
					top: 50%;
					left: -25px;
					transform: translateY(-50%);
					transition: 0.2s ease;
				}
				&:hover {
					&:before {
						visibility: visible;
						opacity: 1;
					}
				}
			}
			span {
				font-size: 14px;
				padding-top: 90px;
				color: $black;
			}
			.socials {
				position: fixed;
				bottom: 10vh;
				display: flex;
				justify-content: center;
				width: 100%;
				left: 50%;
				transform: translate(-50%, 0px);
				a {
					&:first-child {
						margin-right: 15px;
					}
					svg {
						path {
							transition: 0.2s ease;
						}
						&:hover {
							path {
								fill: $white;
							}
						}
					}
				}
			}
		}
	}
</style>
