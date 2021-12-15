module.exports = {
	css: {
		extract: false,
		loaderOptions: {
			sass: {
				additionalData: `
        @import '@/assets/scss/variables';
        `,
			},
		},
	},
};
