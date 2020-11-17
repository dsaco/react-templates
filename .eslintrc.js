module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'@dsaco',
	],
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
	rules: {
		// 关闭 禁用未声明的变量
		'no-undef': 0,
		// 关闭 检测props数据类型
		'react/prop-types': 0,
	},
};
