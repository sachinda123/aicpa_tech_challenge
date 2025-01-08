import express from "express";
import dotenv from "dotenv";
import { pageViewsCount, uniquePageViews } from "./routes/routes";

const app = express();
dotenv.config();
const severPort = process.env.APP_PORT || 3000;

app.get("/page-views-count", pageViewsCount);
app.get("/unique-page-views", uniquePageViews);

app.listen(severPort, () => {
  console.log("app is running");
});

export { app };
