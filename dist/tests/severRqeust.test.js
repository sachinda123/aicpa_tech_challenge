"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
describe("Test end point requested to page-views-count ", () => {
    it("test  500 logs ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.app).get("/page-views-count");
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
    }));
    it("test when log file unable to find on sever response", () => __awaiter(void 0, void 0, void 0, function* () {
        process.env.LOG_FILE = "xxx.log";
        const response = yield (0, supertest_1.default)(index_1.app).get("/page-views-count");
        expect.assertions(2);
        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe("An unknown error occurred");
    }));
    test("Check logs with empty and non support lines", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            process.env.LOG_FILE = "./src/tests/sample/withEmptyLine.log";
            const response = yield (0, supertest_1.default)(index_1.app).get("/page-views-count");
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
        }
        catch (error) {
            console.log("error", error);
        }
    }));
    test("Check logs 10000 records ", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            process.env.LOG_FILE = "./src/tests/sample/10000.log";
            const response = yield (0, supertest_1.default)(index_1.app).get("/page-views-count");
            const totalViewsSum = response.body.reduce((sum, page) => sum + page.totalViews, 0);
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
        }
        catch (error) {
            console.log("error", error);
        }
    }));
    test("Check logs 20000 records ", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            process.env.LOG_FILE = "./src/tests/sample/20000.log";
            const response = yield (0, supertest_1.default)(index_1.app).get("/page-views-count");
            const totalViewsSum = response.body.reduce((sum, page) => sum + page.totalViews, 0);
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
        }
        catch (error) {
            console.log("error", error);
        }
    }));
});
describe("Test end point requested to unique-page-views end point ", () => {
    test("test 500 logs", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.app).get("/unique-page-views");
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
    }));
    it("test when log file unable to find on sever response", () => __awaiter(void 0, void 0, void 0, function* () {
        process.env.LOG_FILE = "xxx.log";
        const response = yield (0, supertest_1.default)(index_1.app).get("/unique-page-views");
        expect.assertions(2);
        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe("An unknown error occurred");
    }));
    test("Check  32 logs", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            process.env.LOG_FILE = "./src/tests/sample/32.log";
            const response = yield (0, supertest_1.default)(index_1.app).get("/unique-page-views");
            expect.assertions(10);
            expect(response.body[0].pageName).toBe("/products/1");
            expect(response.body[0].totalViews).toBe(3);
            expect(response.body[1].pageName).toBe("/home");
            expect(response.body[1].totalViews).toBe(3);
            expect(response.body[2].pageName).toBe("/contact");
            expect(response.body[2].totalViews).toBe(2);
            expect(response.body[3].pageName).toBe("/index");
            expect(response.body[3].totalViews).toBe(1);
            expect(response.body[4].pageName).toBe("/about");
            expect(response.body[4].totalViews).toBe(1);
        }
        catch (error) {
            console.log("error", error);
        }
    }));
    test("Check 10000 logs", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            process.env.LOG_FILE = "./src/tests/sample/10000.log";
            const response = yield (0, supertest_1.default)(index_1.app).get("/unique-page-views");
            expect.assertions(16);
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
        }
        catch (error) {
            console.log("error", error);
        }
    }));
    test("Check 20000 logs", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            process.env.LOG_FILE = "./src/tests/sample/20000.log";
            const response = yield (0, supertest_1.default)(index_1.app).get("/unique-page-views");
            expect.assertions(16);
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
        }
        catch (error) {
            console.log("error", error);
        }
    }));
});
