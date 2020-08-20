module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended', '@dsaco'],
	parser: 'babel-eslint',
	env: {
		browser: true,
	},
	plugins: ['react'],
	settings: {
		react: {
			version: '16',
		},
	},
	rules: {},
};
