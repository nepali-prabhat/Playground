var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var merge = require("webpack-merge");

module.exports = merge(require("./webpack.common"),{
    mode: "production",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "index_bundle.[contentHash].js"
    }
});