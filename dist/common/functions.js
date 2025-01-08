"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniquePageViews = exports.getPageViewsCount = exports.sendResponce = exports.readFile = void 0;
const fs_1 = require("fs");
const readFile = (path) => {
    const logData = (0, fs_1.readFileSync)(path, "utf-8");
    const lines = logData
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map((line) => {
        const [page, ip] = line.split(" ");
        return { page, ip };
    });
    return lines;
};
exports.readFile = readFile;
const sendResponce = (res, data) => {
    res.status(data.statusCode);
    res.send(data.response);
    res.end();
    return;
};
exports.sendResponce = sendResponce;
const getPageViewsCount = (lists) => {
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
};
exports.getPageViewsCount = getPageViewsCount;
const getUniquePageViews = (lists) => {
    let pageViews = {};
    for (const list of lists) {
        const { page, ip } = list;
        if (ip && page) {
            if (!pageViews[page]) {
                pageViews[page] = [];
            }
            pageViews[page].push(ip);
        }
    }
    let uniquePageViews = [...Object.entries(pageViews)].map((data) => {
        let uniq = [...new Set(data[1])].length;
        let retrunElement = {
            pageName: data[0],
            totalViews: uniq,
        };
        return retrunElement;
    });
    return uniquePageViews.sort((a, b) => {
        return b.totalViews - a.totalViews;
    });
};
exports.getUniquePageViews = getUniquePageViews;
