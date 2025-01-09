import { readFile, getPageViewsCount } from "../common/functions";
import path from "path";
import request from "supertest";
import { app } from "../index";
import { iTotalPageReturn } from "../models/models";

describe("Test End point requested to page-views-count ", () => {
  it("test  500 logs ", async () => {
    const response = await request(app).get("/page-views-count");
    expect.assertions(16);

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

  it("test when log file unable to find on sever response", async () => {
    process.env.LOG_FILE = "xxx.log";
    const response = await request(app).get("/page-views-count");
    expect.assertions(2);
    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBe("An unknown error occurred");
  });

  test("Check logs with empty and non support lines", async () => {
    try {
      process.env.LOG_FILE = "./src/tests/sample/withEmptyLine.log";
      const response = await request(app).get("/page-views-count");

      expect.assertions(17);

      expect(response.body[0].pageName).toBe("/products/3");
      expect(response.body[0].totalViews).toBe(4);

      expect(response.body[1].pageName).toBe("/contact");
      expect(response.body[1].totalViews).toBe(4);

      expect(response.body[2].pageName).toBe("/home");
      expect(response.body[2].totalViews).toBe(3);

      expect(response.body[3].pageName).toBe("/products/1");
      expect(response.body[3].totalViews).toBe(2);

      expect(response.body[4].pageName).toBe("/products");
      expect(response.body[4].totalViews).toBe(2);

      expect(response.body[5].pageName).toBe("/products/2");
      expect(response.body[5].totalViews).toBe(1);

      expect(response.body[6].pageName).toBe("/about");
      expect(response.body[6].totalViews).toBe(1);

      expect(response.body[7].pageName).toBe("/index");
      expect(response.body[7].totalViews).toBe(1);

      expect(response.body.length).toBe(8);
    } catch (error) {
      console.log("error", error);
    }
  });

  test("Check logs 10000 records ", async () => {
    try {
      process.env.LOG_FILE = "./src/tests/sample/10000.log";
      const response = await request(app).get("/page-views-count");

      const totalViewsSum = response.body.reduce((sum: number, page: iTotalPageReturn) => sum + page.totalViews, 0);
      const recordMultiplier = 20;

      expect.assertions(17);

      expect(totalViewsSum).toBe(10000);

      expect(response.body[0].pageName).toBe("/contact");
      expect(response.body[0].totalViews).toBe(71 * recordMultiplier);

      expect(response.body[1].pageName).toBe("/home");
      expect(response.body[1].totalViews).toBe(69 * recordMultiplier);

      expect(response.body[2].pageName).toBe("/index");
      expect(response.body[2].totalViews).toBe(67 * recordMultiplier);

      expect(response.body[3].pageName).toBe("/products");
      expect(response.body[3].totalViews).toBe(67 * recordMultiplier);

      expect(response.body[4].pageName).toBe("/products/1");
      expect(response.body[4].totalViews).toBe(64 * recordMultiplier);

      expect(response.body[5].pageName).toBe("/about");
      expect(response.body[5].totalViews).toBe(58 * recordMultiplier);

      expect(response.body[6].pageName).toBe("/products/3");
      expect(response.body[6].totalViews).toBe(54 * recordMultiplier);

      expect(response.body[7].pageName).toBe("/products/2");
      expect(response.body[7].totalViews).toBe(50 * recordMultiplier);
    } catch (error) {
      console.log("error", error);
    }
  });

  test("Check logs 20000 records ", async () => {
    try {
      process.env.LOG_FILE = "./src/tests/sample/20000.log";
      const response = await request(app).get("/page-views-count");

      const totalViewsSum = response.body.reduce((sum: number, page: iTotalPageReturn) => sum + page.totalViews, 0);
      const recordMultiplier = 40;

      expect.assertions(17);

      expect(totalViewsSum).toBe(20000);

      expect(response.body[0].pageName).toBe("/contact");
      expect(response.body[0].totalViews).toBe(71 * recordMultiplier);

      expect(response.body[1].pageName).toBe("/home");
      expect(response.body[1].totalViews).toBe(69 * recordMultiplier);

      expect(response.body[2].pageName).toBe("/index");
      expect(response.body[2].totalViews).toBe(67 * recordMultiplier);

      expect(response.body[3].pageName).toBe("/products");
      expect(response.body[3].totalViews).toBe(67 * recordMultiplier);

      expect(response.body[4].pageName).toBe("/products/1");
      expect(response.body[4].totalViews).toBe(64 * recordMultiplier);

      expect(response.body[5].pageName).toBe("/about");
      expect(response.body[5].totalViews).toBe(58 * recordMultiplier);

      expect(response.body[6].pageName).toBe("/products/3");
      expect(response.body[6].totalViews).toBe(54 * recordMultiplier);

      expect(response.body[7].pageName).toBe("/products/2");
      expect(response.body[7].totalViews).toBe(50 * recordMultiplier);
    } catch (error) {
      console.log("error", error);
    }
  });

  // describe("Test sever request to unique-page-views end point ", () => {
  //   test("test  actual log file with 500 logs", async () => {
  //     const response = await request(app).get("/unique-page-views");

  //     expect(response.body[0].pageName).toBe("/contact");
  //     expect(response.body[0].totalViews).toBe(60);

  //     expect(response.body[1].pageName).toBe("/home");
  //     expect(response.body[1].totalViews).toBe(58);

  //     expect(response.body[2].pageName).toBe("/products");
  //     expect(response.body[2].totalViews).toBe(58);

  //     expect(response.body[3].pageName).toBe("/index");
  //     expect(response.body[3].totalViews).toBe(53);

  //     expect(response.body[4].pageName).toBe("/products/1");
  //     expect(response.body[4].totalViews).toBe(52);

  //     expect(response.body[5].pageName).toBe("/products/3");
  //     expect(response.body[5].totalViews).toBe(48);

  //     expect(response.body[6].pageName).toBe("/about");
  //     expect(response.body[6].totalViews).toBe(47);

  //     expect(response.body[7].pageName).toBe("/products/2");
  //     expect(response.body[7].totalViews).toBe(43);
  //   });
});
