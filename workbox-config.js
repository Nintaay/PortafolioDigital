module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,pdf,svg,png,jpg,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};