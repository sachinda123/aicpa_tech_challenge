import { readFileSync } from "fs";

import { iPageList } from "../models/models";

export function readFile(path: string): iPageList[] {
  const logData = readFileSync(path, "utf-8");
  const lines: iPageList[] = logData
    .split("\n")
    .filter((line: string) => line.trim() !== "")
    .map((line: string) => {
      const [page, ip] = line.split(" ");
      return { page, ip };
    });
  return lines;
}

export function getPageViewsCount(lists: iPageList[]) {
  // add interface
  let pageViewCount = new Map<string, number>();
  for (const list of lists) {
    const { page, ip } = list;
    if (ip && page) {
      pageViewCount.set(page, (pageViewCount.get(page) || 0) + 1);
    }
  }
  // remove any type
  return [...pageViewCount.entries()].sort((a: any, b: any) => {
    return b[1] - a[1];
  });
}
