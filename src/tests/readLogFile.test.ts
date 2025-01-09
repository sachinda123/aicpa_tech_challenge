import { readFile } from "../common/functions";
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
  test("Check 10000 logs", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/10000.log");
      const result = readFile(filePath);
      expect.assertions(1);
      expect(result.length).toBe(10000);
    } catch (error) {
      console.log("error", error);
    }
  });
  test("Check 20000 logs", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/20000.log");
      const result = readFile(filePath);
      expect.assertions(1);
      expect(result.length).toBe(20000);
    } catch (error) {
      console.log("error", error);
    }
  });
  test("Check fail back log file not found", () => {
    try {
      const filePath = path.join(process.cwd(), "src", "./tests/sample/200001.log");
      readFile(filePath);
    } catch (err: any) {
      expect.assertions(1);
      expect(err.message.includes("no such file or directory")).toBe(true);
    }
  });
});
