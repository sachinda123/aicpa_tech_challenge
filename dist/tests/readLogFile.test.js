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
    test("Check 10000 logs", () => {
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
    test("Check 20000 logs", () => {
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
            (0, functions_1.readFile)(filePath);
        }
        catch (err) {
            expect.assertions(1);
            expect(err.message.includes("no such file or directory")).toBe(true);
        }
    });
});
