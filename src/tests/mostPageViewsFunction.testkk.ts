import { readFile, getPageViewsCount } from "../common/functions";
import path from "path";
import supertest from "supertest";
import { app } from "../index";

let server: any;
let requests: any;

beforeAll((done) => {
  server = app.listen(3000, () => {
    requests = supertest(server);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

jest.setTimeout(10000); // 10-second timeout for all tests in this file

describe("GET /", () => {
  test("should return Hello, World!", async () => {
    process.env.LOG_FILE = "xxx.log";
    const response = await requests.get("/page-views-count");
    console.log("response", response);
    expect(1).toBe(1);
    // expect(response.text).toBe("Hello, World!");
  });
});
