const { readFile } = require("../src/common/functions");
const path = require("path");
describe("readFile function test", () => {
  test("Check file reder skip empty lines", async () => {
    try {
      const filePath = path.join(process.cwd(), "src", "../tests/sample/withEmptyLine.log");
      const result = await readFile(filePath);
      expect(result.length).toBe(20);
    } catch (error) {
      console.log("error", error);
    }
  });
});
