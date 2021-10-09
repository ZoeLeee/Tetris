const webpack = require('webpack');
var path = require('path');

var HtmlWebPackPlugin = require("html-webpack-plugin");
function getpath(fileName)
{
    return path.resolve(__dirname, fileName);
}

module.exports = {
    mode:"development",
    entry: __dirname + "/src/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "eval-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 9527
    },
    plugins: [
        new HtmlWebPackPlugin({ title: "俄罗斯方块", template: "./index.html" }),
        new webpack.ProvidePlugin({
            ReactDOM: 'react-dom',
            React: 'react',
            THREE: "three"

        }),
    ],
};