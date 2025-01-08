import { readFile, getPageViewsCount } from "../common/functions";
import path from "path";

describe(" ReadFile function test", () => {
  test("Check file reder skip empty lines", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/withEmptyLine.log");
      const result = readFile(filePath);
      expect.assertions(1);
      expect(result.length).toBe(20);
    } catch (error) {
      console.log("error", error);
    }
  });

  test("Check large log file read properly 10000 logs", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/10000.log");
      const result = readFile(filePath);
      expect.assertions(1);
      expect(result.length).toBe(10000);
    } catch (error) {
      console.log("error", error);
    }
  });
  test("Check large log file read properly 20000 logs", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/20000.log");
      const result = readFile(filePath);
      expect.assertions(1);
      expect(result.length).toBe(20000);
    } catch (error) {
      console.log("error", error);
    }
  });
});

describe("GetPageViewsCount function test", () => {
  test("Check log file with empty and non support records ->  /order check/ page names and count check /unsupport log line skip check", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/withEmptyLine.log");
      const result = readFile(filePath);
      const count = getPageViewsCount(result);

      expect(count[0].pageName).toBe("/products/3");
      expect(count[0].totalViews).toBe(4);

      expect(count[1].pageName).toBe("/contact");
      expect(count[1].totalViews).toBe(4);

      expect(count[2].pageName).toBe("/home");
      expect(count[2].totalViews).toBe(3);

      expect(count[3].pageName).toBe("/products/1");
      expect(count[3].totalViews).toBe(2);

      expect(count[4].pageName).toBe("/products");
      expect(count[4].totalViews).toBe(2);

      expect(count[5].pageName).toBe("/products/2");
      expect(count[5].totalViews).toBe(1);

      expect(count[6].pageName).toBe("/about");
      expect(count[6].totalViews).toBe(1);

      expect(count[7].pageName).toBe("/index");
      expect(count[7].totalViews).toBe(1);

      expect(count.length).toBe(8);
    } catch (error) {
      console.log("error", error);
    }
  });
});
