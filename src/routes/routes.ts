import { Request, Response } from "express";
import { readFile, getPageViewsCount, sendResponce, getUniquePageViews } from "../common/functions";
import { iPageList, iResponse } from "../models/models";

export const pageViewsCount = async (req: Request, res: Response) => {
  try {
    const logFilePath: string = process.env.LOG_FILE || "web.log";
    const data: iPageList[] = readFile(logFilePath);
    let result = getPageViewsCount(data);

    let responce: iResponse = {
      statusCode: 200,
      response: result,
    };
    return sendResponce(res, responce);
  } catch (error) {
    let responseReturn: iResponse = {
      statusCode: 500,
      response: "",
    };
    if (error instanceof Error) {
      responseReturn.response = error.message;
    } else {
      responseReturn.response = "An unknown error occurred";
    }
    return sendResponce(res, responseReturn);
  }
};

export const uniquePageViews = async (req: Request, res: Response) => {
  try {
    const logFilePath: string = process.env.LOG_FILE || "web.log";
    const data: iPageList[] = readFile(logFilePath);
    let result = getUniquePageViews(data);
    let responce: iResponse = {
      statusCode: 200,
      response: result,
    };
    return sendResponce(res, responce);
  } catch (error) {
    let responseReturn: iResponse = {
      statusCode: 500,
      response: "",
    };
    if (error instanceof Error) {
      responseReturn.response = error.message;
    } else {
      responseReturn.response = "An unknown error occurred";
    }
    return sendResponce(res, responseReturn);
  }
};
