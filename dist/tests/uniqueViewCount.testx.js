"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../common/functions");
const path_1 = __importDefault(require("path"));
describe("getUniquePageViews function test", () => {
    test("Check  32 logs with order", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/32.log");
            const result = (0, functions_1.readFile)(filePath);
            const uniqueCountList = (0, functions_1.getUniquePageViews)(result);
            expect.assertions(10);
            expect(uniqueCountList[0].pageName).toBe("/products/1");
            expect(uniqueCountList[0].totalViews).toBe(3);
            expect(uniqueCountList[1].pageName).toBe("/home");
            expect(uniqueCountList[1].totalViews).toBe(3);
            expect(uniqueCountList[2].pageName).toBe("/contact");
            expect(uniqueCountList[2].totalViews).toBe(2);
            expect(uniqueCountList[3].pageName).toBe("/index");
            expect(uniqueCountList[3].totalViews).toBe(1);
            expect(uniqueCountList[4].pageName).toBe("/about");
            expect(uniqueCountList[4].totalViews).toBe(1);
        }
        catch (error) {
            console.log("error", error);
        }
    });
    test("Check 500 logs  with order ", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/500.log");
            const result = (0, functions_1.readFile)(filePath);
            const uniqueCountList = (0, functions_1.getUniquePageViews)(result);
            expect.assertions(16);
            expect(uniqueCountList[0].pageName).toBe("/contact");
            expect(uniqueCountList[0].totalViews).toBe(60);
            expect(uniqueCountList[1].pageName).toBe("/home");
            expect(uniqueCountList[1].totalViews).toBe(58);
            expect(uniqueCountList[2].pageName).toBe("/products");
            expect(uniqueCountList[2].totalViews).toBe(58);
            expect(uniqueCountList[3].pageName).toBe("/index");
            expect(uniqueCountList[3].totalViews).toBe(53);
            expect(uniqueCountList[4].pageName).toBe("/products/1");
            expect(uniqueCountList[4].totalViews).toBe(52);
            expect(uniqueCountList[5].pageName).toBe("/products/3");
            expect(uniqueCountList[5].totalViews).toBe(48);
            expect(uniqueCountList[6].pageName).toBe("/about");
            expect(uniqueCountList[6].totalViews).toBe(47);
            expect(uniqueCountList[7].pageName).toBe("/products/2");
            expect(uniqueCountList[7].totalViews).toBe(43);
        }
        catch (error) {
            console.log("error", error);
        }
    });
    test("Check 10000 logs  with order ", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/10000.log");
            const result = (0, functions_1.readFile)(filePath);
            const uniqueCountList = (0, functions_1.getUniquePageViews)(result);
            expect.assertions(16);
            expect(uniqueCountList[0].pageName).toBe("/contact");
            expect(uniqueCountList[0].totalViews).toBe(60);
            expect(uniqueCountList[1].pageName).toBe("/home");
            expect(uniqueCountList[1].totalViews).toBe(58);
            expect(uniqueCountList[2].pageName).toBe("/products");
            expect(uniqueCountList[2].totalViews).toBe(58);
            expect(uniqueCountList[3].pageName).toBe("/index");
            expect(uniqueCountList[3].totalViews).toBe(53);
            expect(uniqueCountList[4].pageName).toBe("/products/1");
            expect(uniqueCountList[4].totalViews).toBe(52);
            expect(uniqueCountList[5].pageName).toBe("/products/3");
            expect(uniqueCountList[5].totalViews).toBe(48);
            expect(uniqueCountList[6].pageName).toBe("/about");
            expect(uniqueCountList[6].totalViews).toBe(47);
            expect(uniqueCountList[7].pageName).toBe("/products/2");
            expect(uniqueCountList[7].totalViews).toBe(43);
        }
        catch (error) {
            console.log("error", error);
        }
    });
    test("Check 20000 logs  with order ", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/20000.log");
            const result = (0, functions_1.readFile)(filePath);
            const uniqueCountList = (0, functions_1.getUniquePageViews)(result);
            expect.assertions(16);
            expect(uniqueCountList[0].pageName).toBe("/contact");
            expect(uniqueCountList[0].totalViews).toBe(60);
            expect(uniqueCountList[1].pageName).toBe("/home");
            expect(uniqueCountList[1].totalViews).toBe(58);
            expect(uniqueCountList[2].pageName).toBe("/products");
            expect(uniqueCountList[2].totalViews).toBe(58);
            expect(uniqueCountList[3].pageName).toBe("/index");
            expect(uniqueCountList[3].totalViews).toBe(53);
            expect(uniqueCountList[4].pageName).toBe("/products/1");
            expect(uniqueCountList[4].totalViews).toBe(52);
            expect(uniqueCountList[5].pageName).toBe("/products/3");
            expect(uniqueCountList[5].totalViews).toBe(48);
            expect(uniqueCountList[6].pageName).toBe("/about");
            expect(uniqueCountList[6].totalViews).toBe(47);
            expect(uniqueCountList[7].pageName).toBe("/products/2");
            expect(uniqueCountList[7].totalViews).toBe(43);
        }
        catch (error) {
            console.log("error", error);
        }
    });
    test("Check 500 logs , getPageViewsCount and  getUniquePageViews count, unique count must be always below or equal to view count ", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/500.log");
            const result = (0, functions_1.readFile)(filePath);
            const viewCountList = (0, functions_1.getPageViewsCount)(result);
            const uniqueCountList = (0, functions_1.getUniquePageViews)(result);
            expect.assertions(32);
            expect(viewCountList[0].pageName).toBe("/contact");
            expect(viewCountList[0].totalViews).toBe(71);
            expect(uniqueCountList[0].pageName).toBe("/contact");
            expect(uniqueCountList[0].totalViews).toBe(60);
            expect(viewCountList[1].pageName).toBe("/home");
            expect(viewCountList[1].totalViews).toBe(69);
            expect(uniqueCountList[1].pageName).toBe("/home");
            expect(uniqueCountList[1].totalViews).toBe(58);
            expect(viewCountList[3].pageName).toBe("/products");
            expect(viewCountList[3].totalViews).toBe(67);
            expect(uniqueCountList[2].pageName).toBe("/products");
            expect(uniqueCountList[2].totalViews).toBe(58);
            expect(viewCountList[2].pageName).toBe("/index");
            expect(viewCountList[2].totalViews).toBe(67);
            expect(uniqueCountList[3].pageName).toBe("/index");
            expect(uniqueCountList[3].totalViews).toBe(53);
            expect(viewCountList[4].pageName).toBe("/products/1");
            expect(viewCountList[4].totalViews).toBe(64);
            expect(uniqueCountList[4].pageName).toBe("/products/1");
            expect(uniqueCountList[4].totalViews).toBe(52);
            expect(viewCountList[6].pageName).toBe("/products/3");
            expect(viewCountList[6].totalViews).toBe(54);
            expect(uniqueCountList[5].pageName).toBe("/products/3");
            expect(uniqueCountList[5].totalViews).toBe(48);
            expect(viewCountList[5].pageName).toBe("/about");
            expect(viewCountList[5].totalViews).toBe(58);
            expect(uniqueCountList[6].pageName).toBe("/about");
            expect(uniqueCountList[6].totalViews).toBe(47);
            expect(viewCountList[7].pageName).toBe("/products/2");
            expect(viewCountList[7].totalViews).toBe(50);
            expect(uniqueCountList[7].pageName).toBe("/products/2");
            expect(uniqueCountList[7].totalViews).toBe(43);
        }
        catch (error) {
            console.log("error", error);
        }
    });
});
