import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

var port = 3000;

var app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", (req, res) => {
  console.log("users"); // eslint-disable-line no-console
  res.json([
    { id: 1, name: "vedansh" },
    { id: 2, name: "bob" },
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    console.log("SERVER RUNNING"); // eslint-disable-line no-console
    open(`http://localhost:${port}`);
  }
});
