"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = readFile;
exports.getPageViewsCount = getPageViewsCount;
const fs_1 = require("fs");
function readFile(path) {
    const logData = (0, fs_1.readFileSync)(path, "utf-8");
    const lines = logData
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map((line) => {
        const [page, ip] = line.split(" ");
        return { page, ip };
    });
    return lines;
}
function getPageViewsCount(lists) {
    let pageViewCount = new Map();
    for (const list of lists) {
        const { page, ip } = list;
        if (ip && page) {
            pageViewCount.set(page, (pageViewCount.get(page) || 0) + 1);
        }
    }
    return [...pageViewCount.entries()]
        .sort((a, b) => {
        return b[1] - a[1];
    })
        .map((data) => {
        let retrunElement = {
            pageName: data[0],
            totalViews: data[1],
        };
        return retrunElement;
    });
}
