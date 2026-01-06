const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  reactScriptsVersion: "react-scripts",

  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },

    configure: (webpackConfig, { env, paths }) => {
      if (env === "production") {
        console.log("🔧 Applying production optimizations...");

        webpackConfig.devtool = false;

        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                parse: {
                  ecma: 8,
                },
                compress: {
                  ecma: 5,
                  warnings: false,
                  comparisons: false,
                  inline: 2,
                  drop_console: true,
                  drop_debugger: true,
                  pure_funcs: ["console.log", "console.info", "console.debug"],
                },
                mangle: {
                  safari10: true,
                },
                output: {
                  ecma: 5,
                  comments: false,
                  ascii_only: true,
                },
              },
              extractComments: false,
            }),
          ],

          splitChunks: {
            chunks: "all",
            minSize: 20000,
            maxSize: 50000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: "~",
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
                name(module) {
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1];
                  return `npm.${packageName.replace("@", "")}`;
                },
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
            },
          },
          runtimeChunk: {
            name: "runtime",
          },
        };

        webpackConfig.plugins.push(
          new CompressionPlugin({
            filename: "[path][base].gz",
            algorithm: "gzip",
            test: /\.(js|css|html|svg|json)$/,
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
          }),
          new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg|json)$/,
            compressionOptions: { level: 11 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
          })
        );
        if (process.env.ANALYZE_BUNDLE === "true") {
          webpackConfig.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              reportFilename: "bundle-report.html",
              openAnalyzer: false,
            })
          );
        }
        webpackConfig.performance = {
          maxAssetSize: 500000,
          maxEntrypointSize: 500000,
          hints: "warning",
        };
      }

      return webpackConfig;
    },

    plugins: {
      add: [],
      remove: [],
    },
  },

  devServer: {
    hot: true,
    compress: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },

  jest: {
    configure: {
      collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/index.js",
        "!src/reportWebVitals.js",
      ],
    },
  },
};
