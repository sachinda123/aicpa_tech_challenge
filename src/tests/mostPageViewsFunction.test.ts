import { readFile } from "../common/functions";
import path from "path";

describe("readFile function test", () => {
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
