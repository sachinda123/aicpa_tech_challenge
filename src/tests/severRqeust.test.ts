import { readFile, getPageViewsCount } from "../common/functions";
import path from "path";
import request from "supertest";
import { app } from "../index";

describe("Test sever request to page-views-count end point ", () => {
  it("test  actual log file with 500 logs ", async () => {
    const response = await request(app).get("/page-views-count");

    expect(response.body[0].pageName).toBe("/contact");
    expect(response.body[0].totalViews).toBe(71);

    expect(response.body[1].pageName).toBe("/home");
    expect(response.body[1].totalViews).toBe(69);

    expect(response.body[2].pageName).toBe("/index");
    expect(response.body[2].totalViews).toBe(67);

    expect(response.body[3].pageName).toBe("/products");
    expect(response.body[3].totalViews).toBe(67);

    expect(response.body[4].pageName).toBe("/products/1");
    expect(response.body[4].totalViews).toBe(64);

    expect(response.body[5].pageName).toBe("/about");
    expect(response.body[5].totalViews).toBe(58);

    expect(response.body[6].pageName).toBe("/products/3");
    expect(response.body[6].totalViews).toBe(54);

    expect(response.body[7].pageName).toBe("/products/2");
    expect(response.body[7].totalViews).toBe(50);
  });
});

describe("Test sever request to unique-page-views end point ", () => {
  test("test  actual log file with 500 logs", async () => {
    const response = await request(app).get("/unique-page-views");

    expect(response.body[0].pageName).toBe("/contact");
    expect(response.body[0].totalViews).toBe(60);

    expect(response.body[1].pageName).toBe("/home");
    expect(response.body[1].totalViews).toBe(58);

    expect(response.body[2].pageName).toBe("/products");
    expect(response.body[2].totalViews).toBe(58);

    expect(response.body[3].pageName).toBe("/index");
    expect(response.body[3].totalViews).toBe(53);

    expect(response.body[4].pageName).toBe("/products/1");
    expect(response.body[4].totalViews).toBe(52);

    expect(response.body[5].pageName).toBe("/products/3");
    expect(response.body[5].totalViews).toBe(48);

    expect(response.body[6].pageName).toBe("/about");
    expect(response.body[6].totalViews).toBe(47);

    expect(response.body[7].pageName).toBe("/products/2");
    expect(response.body[7].totalViews).toBe(43);
  });
});
