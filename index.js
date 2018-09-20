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
		test: /\.js$/,
		exclude: /node_modules/,
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-env"],
			plugins: ["@babel/plugin-transform-runtime"],
			comments: false,
			env: {
				test: {
					plugins: ["istanbul"]
				}
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
