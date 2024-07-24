const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: "afp",
		projectName: "simulacion-beneficio-consulta",
		webpackConfigEnv,
		argv,
		disableHtmlGeneration: true,
	});

	let entryPoint = [];
	entryPoint.push("src/afp-simulacion-beneficio-consulta.tsx");
	entryPoint.push("src/infrastructure/redux/store.ts");

	return merge(
		{
			devServer: {
				proxy: {
					"/index.html": {
						target: "/portal/index.html",
						bypass: function (req, res, proxyOptions) {
							return "/portal/index.html";
						},
					},
				},
			},
			plugins: [
				new CopyWebpackPlugin({
					patterns: [
						{ from: "*", to: "portal/", force: true, context: "config/" },
						{
							from: "*",
							to: "portal/",
							context: "node_modules/@sonda/portal/dist/",
						},
						{
							from: "*",
							to: "navigation/",
							context: "node_modules/@sonda/navigation/dist/",
						},
					],
				}),
			],
		},
		defaultConfig,
		// {
		//   resolve: {
		//     symlinks: false,
		//   },
		// },
		{
			entry: {
				"afp-simulacion-beneficio-consulta": path.resolve(process.cwd(), entryPoint[0]),
				"store-simulacion-beneficio-consulta": path.resolve(process.cwd(), entryPoint[1]),
			},
			output: { filename: "[name].js" },
			module: {
				rules: [
					{
						test: /\.(eot|ttf|woff|woff2)$/,
						use: ["file-loader"],
					},
					{
						test: /\.svg$/,
						use: ["@svgr/webpack", "url-loader"],
					},
					{
						test: /\.(png|jpg|jpeg|gif)$/i,
						type: "asset/resource",
					},
				],
			},
		},
	);
};
