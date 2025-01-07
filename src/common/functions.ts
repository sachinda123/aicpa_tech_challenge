import fs from "fs";
import { PageList } from "../models/models";

export function readFile(path: string): PageList[] {
  const logData = fs.readFileSync(path, "utf-8");
  const lines: PageList[] = logData
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const [page, ip] = line.split(" ");
      return { page, ip };
    });
  return lines;
}

export function getPageViewsCount(lists: PageList[]) {
  let pageViewCount = new Map<string, number>();
  for (const list of lists) {
    const { page, ip } = list;
    if (ip && page) {
      pageViewCount.set(page, (pageViewCount.get(page) || 0) + 1);
    }
  }

  console.log("pageViewCount", Object.entries(pageViewCount));
  // return pageViewCount.sort((a, b) => {
  //   return a - b;
  // });
}
