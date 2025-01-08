import { Request, Response } from "express";
import { readFile, getPageViewsCount, sendResponce } from "../common/functions";
import { iPageList, iResponse } from "../models/models";

export const pageViewsCount = async (req: Request, res: Response) => {
  try {
    const logFilePath: string = process.env.LOG_FILE || "web.log";
    console.log("file", process.env.LOG_FILE);
    const data: iPageList[] = readFile(logFilePath);
    let result = getPageViewsCount(data);

    let responce: iResponse = {
      statusCode: 200,
      response: { result },
    };

    sendResponce(res, responce);
    res.status(200);
    res.send(result);
  } catch (error) {
    console.log("error", error);
  }
};
