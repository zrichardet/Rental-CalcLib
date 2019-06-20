import { join } from "path";
const include = join(_dirname, "src");
export default {
  entry: "./src.index",
  output: {
    path: join(_dirname, "dist"),
    LibraryTarget: "umd",
    LibraryName: "ROICalc"
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel", include },
      { test: /\.js$/, loader: "json", include }
    ]
  }
};
