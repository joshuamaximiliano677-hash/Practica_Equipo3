module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,html,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};