"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../common/functions");
const path_1 = __importDefault(require("path"));
describe(" ReadFile function test", () => {
    test("Check file reder skip empty lines", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/withEmptyLine.log");
            const result = (0, functions_1.readFile)(filePath);
            expect.assertions(1);
            expect(result.length).toBe(20);
        }
        catch (error) {
            console.log("error", error);
        }
    });
    test("Check large log file read properly 10000 logs", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/10000.log");
            const result = (0, functions_1.readFile)(filePath);
            expect.assertions(1);
            expect(result.length).toBe(10000);
        }
        catch (error) {
            console.log("error", error);
        }
    });
    test("Check large log file read properly 20000 logs", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/20000.log");
            const result = (0, functions_1.readFile)(filePath);
            expect.assertions(1);
            expect(result.length).toBe(20000);
        }
        catch (error) {
            console.log("error", error);
        }
    });
    test("Check fail back log file not found", () => {
        try {
            const filePath = path_1.default.join(process.cwd(), "src", "./tests/sample/200001.log");
            const result = (0, functions_1.readFile)(filePath);
        }
        catch (err) {
            expect.assertions(1);
            expect(err.message.includes("no such file or directory")).toBe(true);
        }
    });
});
/*
describe("GetPageViewsCount function test", () => {
  test("Check log file with empty and non support records ->  /order check/ page names and count check /unsupport log line skip check", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/withEmptyLine.log");
      const result = readFile(filePath);
      const countList = getPageViewsCount(result);
      const totalViewsSum = countList.reduce((sum, page) => sum + page.totalViews, 0);
      expect.assertions(18);

      expect(countList[0].pageName).toBe("/products/3");
      expect(countList[0].totalViews).toBe(4);

      expect(countList[1].pageName).toBe("/contact");
      expect(countList[1].totalViews).toBe(4);

      expect(countList[2].pageName).toBe("/home");
      expect(countList[2].totalViews).toBe(3);

      expect(countList[3].pageName).toBe("/products/1");
      expect(countList[3].totalViews).toBe(2);

      expect(countList[4].pageName).toBe("/products");
      expect(countList[4].totalViews).toBe(2);

      expect(countList[5].pageName).toBe("/products/2");
      expect(countList[5].totalViews).toBe(1);

      expect(countList[6].pageName).toBe("/about");
      expect(countList[6].totalViews).toBe(1);

      expect(countList[7].pageName).toBe("/index");
      expect(countList[7].totalViews).toBe(1);

      expect(countList.length).toBe(8);
      expect(result.length - 2).toBe(totalViewsSum);
    } catch (error) {
      console.log("error", error);
    }
  });
  test("Check log valied 500 records ->  /order check/ page names and count check ", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/500.log");
      const result = readFile(filePath);
      const countList = getPageViewsCount(result);
      const totalViewsSum = countList.reduce((sum, page) => sum + page.totalViews, 0);
      const recordMultiplier = 1;

      expect.assertions(19);

      expect(result.length).toBe(500);
      expect(result.length).toBe(totalViewsSum);

      expect(countList[0].pageName).toBe("/contact");
      expect(countList[0].totalViews).toBe(71 * recordMultiplier);

      expect(countList[1].pageName).toBe("/home");
      expect(countList[1].totalViews).toBe(69 * recordMultiplier);

      expect(countList[2].pageName).toBe("/index");
      expect(countList[2].totalViews).toBe(67 * recordMultiplier);

      expect(countList[3].pageName).toBe("/products");
      expect(countList[3].totalViews).toBe(67 * recordMultiplier);

      expect(countList[4].pageName).toBe("/products/1");
      expect(countList[4].totalViews).toBe(64 * recordMultiplier);

      expect(countList[5].pageName).toBe("/about");
      expect(countList[5].totalViews).toBe(58 * recordMultiplier);

      expect(countList[6].pageName).toBe("/products/3");
      expect(countList[6].totalViews).toBe(54 * recordMultiplier);

      expect(countList[7].pageName).toBe("/products/2");
      expect(countList[7].totalViews).toBe(50 * recordMultiplier);

      expect(countList.length).toBe(8);
    } catch (error) {
      console.log("error", error);
    }
  });
  test("Check log valied 10000 records ->  /order check/ page names and count check ", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/10000.log");
      const result = readFile(filePath);
      const countList = getPageViewsCount(result);
      const totalViewsSum = countList.reduce((sum, page) => sum + page.totalViews, 0);
      const recordMultiplier = 20;

      expect.assertions(19);

      expect(result.length).toBe(10000);
      expect(result.length).toBe(totalViewsSum);

      expect(countList[0].pageName).toBe("/contact");
      expect(countList[0].totalViews).toBe(71 * recordMultiplier);

      expect(countList[1].pageName).toBe("/home");
      expect(countList[1].totalViews).toBe(69 * recordMultiplier);

      expect(countList[2].pageName).toBe("/index");
      expect(countList[2].totalViews).toBe(67 * recordMultiplier);

      expect(countList[3].pageName).toBe("/products");
      expect(countList[3].totalViews).toBe(67 * recordMultiplier);

      expect(countList[4].pageName).toBe("/products/1");
      expect(countList[4].totalViews).toBe(64 * recordMultiplier);

      expect(countList[5].pageName).toBe("/about");
      expect(countList[5].totalViews).toBe(58 * recordMultiplier);

      expect(countList[6].pageName).toBe("/products/3");
      expect(countList[6].totalViews).toBe(54 * recordMultiplier);

      expect(countList[7].pageName).toBe("/products/2");
      expect(countList[7].totalViews).toBe(50 * recordMultiplier);

      expect(countList.length).toBe(8);
    } catch (error) {
      console.log("error", error);
    }
  });
  test("Check log valied 20000 records ->  /order check/ page names and count check ", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/20000.log");
      const result = readFile(filePath);
      const countList = getPageViewsCount(result);
      const totalViewsSum = countList.reduce((sum, page) => sum + page.totalViews, 0);
      const recordMultiplier = 40;

      expect.assertions(19);

      expect(result.length).toBe(20000);
      expect(result.length).toBe(totalViewsSum);

      expect(countList[0].pageName).toBe("/contact");
      expect(countList[0].totalViews).toBe(71 * recordMultiplier);

      expect(countList[1].pageName).toBe("/home");
      expect(countList[1].totalViews).toBe(69 * recordMultiplier);

      expect(countList[2].pageName).toBe("/index");
      expect(countList[2].totalViews).toBe(67 * recordMultiplier);

      expect(countList[3].pageName).toBe("/products");
      expect(countList[3].totalViews).toBe(67 * recordMultiplier);

      expect(countList[4].pageName).toBe("/products/1");
      expect(countList[4].totalViews).toBe(64 * recordMultiplier);

      expect(countList[5].pageName).toBe("/about");
      expect(countList[5].totalViews).toBe(58 * recordMultiplier);

      expect(countList[6].pageName).toBe("/products/3");
      expect(countList[6].totalViews).toBe(54 * recordMultiplier);

      expect(countList[7].pageName).toBe("/products/2");
      expect(countList[7].totalViews).toBe(50 * recordMultiplier);

      expect(countList.length).toBe(8);
    } catch (error) {
      console.log("error", error);
    }
  });
});
*/
