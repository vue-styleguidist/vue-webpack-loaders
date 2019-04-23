// Based on vue-cli
// https://github.com/vuejs/vue-cli
var vueLoaderConfig = require("./lib/vue-loader.conf");

module.exports = [
	{
		test: /\.vue$/,
		exclude: /node_modules/,
		loader: "vue-loader",
		options: vueLoaderConfig
	},
	{
		test: /\.js?$/,
		exclude: modulePath =>
			/node_modules/.test(modulePath) &&
			!/node_modules[\\/]regexpu-core/.test(modulePath) &&
			!/node_modules[\\/]unicode-match-property-ecmascript/.test(modulePath) &&
			!/node_modules[\\/]unicode-match-property-value-ecmascript/.test(
				modulePath
			) &&
			!/node_modules[\\/]acorn-jsx/.test(modulePath) &&
			!/node_modules[\\/]@znck[\\/]prop-types/.test(modulePath),
		use: {
			loader: "babel-loader",
			options: {
				sourceType: "unambiguous",
				presets: [
					[
						"@babel/preset-env",
						{
							useBuiltIns: "usage",
							corejs: 2,
							targets: {
								ie: "11"
							}
						}
					]
				],
				comments: false
			}
		}
	},
	{
		test: /\.css$/,
		loader: "style-loader!css-loader"
	},

	{
		test: /\.json$/,
		loader: "json-loader"
	},

	{
		exclude: [/\.html$/, /\.js$/, /\.css$/, /\.vue$/, /\.json$/],
		loader: "url-loader",
		query: {
			limit: 10000,
			name: "static/media/[name].[hash:8].[ext]"
		}
	}
];
