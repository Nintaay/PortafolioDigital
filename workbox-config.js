module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,svg,jpg,png,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};