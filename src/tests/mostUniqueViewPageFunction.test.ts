import { readFile, getPageViewsCount } from "../common/functions";
import path from "path";

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
});
