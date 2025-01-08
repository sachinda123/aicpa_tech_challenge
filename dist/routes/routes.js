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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniquePageViews = exports.pageViewsCount = void 0;
const functions_1 = require("../common/functions");
const pageViewsCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logFilePath = process.env.LOG_FILE || "web.log";
        const data = (0, functions_1.readFile)(logFilePath);
        let result = (0, functions_1.getPageViewsCount)(data);
        let responce = {
            statusCode: 200,
            response: result,
        };
        return (0, functions_1.sendResponce)(res, responce);
    }
    catch (error) {
        let responseReturn = {
            statusCode: 500,
            response: "",
        };
        if (error instanceof Error) {
            responseReturn.response = error.message;
        }
        else {
            responseReturn.response = "An unknown error occurred";
        }
        return (0, functions_1.sendResponce)(res, responseReturn);
    }
});
exports.pageViewsCount = pageViewsCount;
const uniquePageViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logFilePath = process.env.LOG_FILE || "web.log";
        const data = (0, functions_1.readFile)(logFilePath);
        let result = (0, functions_1.getUniquePageViews)(data);
        let responce = {
            statusCode: 200,
            response: result,
        };
        return (0, functions_1.sendResponce)(res, responce);
    }
    catch (error) {
        let responseReturn = {
            statusCode: 500,
            response: "",
        };
        if (error instanceof Error) {
            responseReturn.response = error.message;
        }
        else {
            responseReturn.response = "An unknown error occurred";
        }
        return (0, functions_1.sendResponce)(res, responseReturn);
    }
});
exports.uniquePageViews = uniquePageViews;
