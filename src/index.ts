import express from "express";
import dotenv from "dotenv";
import { pageViewsCount } from "./routes/routes";

const sever = express();
dotenv.config();
const severPort = process.env.APP_PORT || 3000;

sever.get("/page-views-count", pageViewsCount);
// sever.get("/unique-page-views", getUniquePageViews);

sever.listen(severPort, () => {
  console.log("app is running");
});

export { sever };
