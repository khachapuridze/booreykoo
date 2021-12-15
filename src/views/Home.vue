<template>
	<div class="home">
		<div class="home__logo">
			<img alt="Vue logo" src="../assets/images/booreykoo.svg" />
		</div>
		<div class="home__teaser">
			BUREIKOU - [BOO-REY-KOO] JAPANESE 無礼講 putting everything aside to be
			yourself
		</div>
		<div class="contact-us-button">contact us</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue';

	export default {
		name: 'Home',
		components: {
			HelloWorld,
		},
	};
</script>

<style lang="scss">
	.home {
		background: $black;
		width: 100%;
		height: 100vh;
		position: relative;
		&__logo,
		&__teaser {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&__teaser {
			top: calc(50% + 80px);
			max-width: 350px;
			font-size: 12px;
			color: $white;
		}
		.contact-us-button {
			cursor: pointer;
			position: absolute;
			bottom: 75px;
			left: 50%;
			transform: translate(-50%, 0%);
			font-size: 20px;
			color: $white;
			width: 190px;
			height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 3px solid $yellow;
			transition: 0.4s ease;
			&:hover {
				background: $yellow;
				border: 3px solid $white;
				color: $black;
			}
		}
	}
</style>
