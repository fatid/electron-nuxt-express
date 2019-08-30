module.exports = {
	env: {
		API_KEY: process.env.API_KEY,
		lang: "en",
		ERROR_PAGE: "404",
		company: 'Nuxt,Electron,Express Starter Kit', 
	}, 
	modules: [
		'~/server/api.js', 
	], 
	mode: 'spa',
	// Headers of the page
	head: {title: 'test',
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
		
	}, 
	
	loading: false, // Disable default loading bar

	// Build Options
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				// Run ESLint on save
				// config.module.rules.push({
				// 	enforce: 'pre',
				// 	test: /\.(js|vue)$/,
				// 	loader: 'eslint-loader',
				// 	exclude: /(node_modules)/
				// })
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
		},
		extractCSS: true, 
	},
	 
	dev: process.env.NODE_ENV === 'DEV',
	css: [
		// '~/assets/style/theme.styl',  
	],
	plugins: []
}
