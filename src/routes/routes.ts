import { Request, Response } from "express";
// const { readFile, getPageViewsCount } = import("../common/functions");
import { readFile, getPageViewsCount } from "../common/functions";

import { PageList } from "../models/models";

module.exports = {
  pageViewsCount: async (req: Request, res: Response) => {
    try {
      const logFilePath: string = "web.log";
      const data: PageList[] = readFile(logFilePath);
      console.log("ssss", await getPageViewsCount(data));

      //   console.log(await readFile(logFilePath));
      // const logEntries = parseFile(logData);
      res.status(200);
      res.send({
        pageList: [
          ["/home", 3],
          ["/about", 1],
          ["/contact", 1],
        ],
      });
    } catch (error) {
      console.log("error", error);
    }

    // console.log("helloe");
  },
};
