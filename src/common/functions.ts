import { readFileSync } from "fs";
import { Response } from "express";

import { iPageList, iTotalPageReturn, iResponse } from "../models/models";

export const readFile = (path: string): iPageList[] => {
  const logData = readFileSync(path, "utf-8");
  const lines: iPageList[] = logData
    .split("\n")
    .filter((line: string) => line.trim() !== "")
    .map((line: string) => {
      const [page, ip] = line.split(" ");
      return { page, ip };
    });
  return lines;
};
export const sendResponce = (res: Response, data: iResponse) => {
  res.status(data.statusCode);
  res.send(data.response);
  res.end();
  return;
};
export const getPageViewsCount = (lists: iPageList[]) => {
  let pageViewCount = new Map<string, number>();
  for (const list of lists) {
    const { page, ip } = list;
    if (ip && page) {
      pageViewCount.set(page, (pageViewCount.get(page) || 0) + 1);
    }
  }
  return [...pageViewCount.entries()]
    .sort((a: [string, number], b: [string, number]) => {
      return b[1] - a[1];
    })
    .map((data: [string, number]) => {
      let retrunElement: iTotalPageReturn = {
        pageName: data[0],
        totalViews: data[1],
      };
      return retrunElement;
    });
};
export const getUniquePageViews = (lists: iPageList[]) => {
  let pageViews: Record<string, string[]> = {};
  for (const list of lists) {
    const { page, ip } = list;
    if (ip && page) {
      if (!pageViews[page]) {
        pageViews[page] = [];
      }
      pageViews[page].push(ip);
    }
  }
  let uniquePageViews = [...Object.entries(pageViews)].map((data) => {
    let uniq: number = [...new Set(data[1])].length;
    let retrunElement: iTotalPageReturn = {
      pageName: data[0],
      totalViews: uniq,
    };
    return retrunElement;
  });
  return uniquePageViews.sort((a: iTotalPageReturn, b: iTotalPageReturn) => {
    return b.totalViews - a.totalViews;
  });
};
