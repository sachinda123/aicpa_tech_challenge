"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sever = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes/routes");
const sever = (0, express_1.default)();
exports.sever = sever;
dotenv_1.default.config();
const severPort = process.env.APP_PORT || 3000;
sever.get("/page-views-count", routes_1.pageViewsCount);
// sever.get("/unique-page-views", getUniquePageViews);
sever.listen(severPort, () => {
    console.log("app is running");
});
