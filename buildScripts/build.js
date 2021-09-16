import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import chalk from "chalk";

process.env.NODE_ENV = "production";

// eslint-disable-next-line no-unused-vars
webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  return 0;
});
