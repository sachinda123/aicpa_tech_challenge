import { Request, Response } from "express";
// const { readFile, getPageViewsCount } = import("../common/functions");
import { readFile, getPageViewsCount } from "../common/functions";

import { iPageList } from "../models/models";

module.exports = {
  pageViewsCount: async (req: Request, res: Response) => {
    try {
      const logFilePath: string = "web.log";
      const data: iPageList[] = readFile(logFilePath);
      let result = await getPageViewsCount(data);
      res.status(200);
      res.send(result);
    } catch (error) {
      console.log("error", error);
    }

    // console.log("helloe");
  },
};
