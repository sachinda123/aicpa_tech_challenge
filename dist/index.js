"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
exports.app = app;
const severPort = process.env.APP_PORT || 3000;
dotenv_1.default.config();
app.get("/page-views-count", routes_1.pageViewsCount);
app.get("/unique-page-views", routes_1.uniquePageViews);
app.listen(severPort, () => {
    console.log("app is running");
});
