// craco.config.js - Place in ROOT directory
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  reactScriptsVersion: "react-scripts",

  webpack: {
    alias: {
      // Add path aliases for cleaner imports
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },

    configure: (webpackConfig, { env, paths }) => {
      // Only apply optimizations in production
      if (env === "production") {
        console.log("🔧 Applying production optimizations...");

        // ============= OPTIMIZATION 1: Remove Source Maps =============
        webpackConfig.devtool = false;

        // ============= OPTIMIZATION 2: Better Minification =============
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
                  // Remove console logs in production
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

          // ============= OPTIMIZATION 3: Code Splitting =============
          splitChunks: {
            chunks: "all",
            minSize: 20000,
            maxSize: 50000, // Try to keep chunks under 50KB
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
                  // Get the package name
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1];
                  // npm package names are URL-safe, but some servers don't like @ symbols
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

          // ============= OPTIMIZATION 4: Runtime Chunk =============
          runtimeChunk: {
            name: "runtime",
          },
        };

        // ============= OPTIMIZATION 5: Add Compression =============
        webpackConfig.plugins.push(
          new CompressionPlugin({
            filename: "[path][base].gz",
            algorithm: "gzip",
            test: /\.(js|css|html|svg|json)$/,
            threshold: 10240, // 10KB
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

        // ============= OPTIMIZATION 6: Bundle Analyzer (Optional) =============
        if (process.env.ANALYZE_BUNDLE === "true") {
          webpackConfig.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              reportFilename: "bundle-report.html",
              openAnalyzer: false,
            })
          );
        }

        // ============= OPTIMIZATION 7: Performance Hints =============
        webpackConfig.performance = {
          maxAssetSize: 500000, // 500KB
          maxEntrypointSize: 500000, // 500KB
          hints: "warning",
        };
      }

      return webpackConfig;
    },

    plugins: {
      add: [
        // Add plugins here if needed
      ],
      remove: [
        // Remove plugins here if needed
      ],
    },
  },

  // ============= DEVELOPMENT OPTIMIZATIONS =============
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

  // ============= JEST CONFIGURATION =============
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
