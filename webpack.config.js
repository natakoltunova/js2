const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  entry: "./src/shop.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "shop.js",
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },

      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }],
      },
      {
        test: /\.img$/,
        use: [{ loader: "vue-img-loader" }],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
