const express = require("express");
const { pageViewsCount } = require("./routes/routes");
const sever = express();
const severPort = 3000;

sever.get("/page-views-count", pageViewsCount);
// sever.get("/unique-page-views", getUniquePageViews);

sever.listen(severPort, () => {
  console.log("app is running");
});
