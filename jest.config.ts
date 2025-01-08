// import type { Config } from "jest";

// const config: Config = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testMatch: ["**/tests/**/*.test.ts"],
//   verbose: true,
//   setupFiles: ["./jest.setup.ts"],
// };

// export default config;

// export default {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   transform: {
//     "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
//   },
//   extensionsToTreatAsEsm: [".ts"],
//   moduleNameMapper: {
//     "^(\\.{1,2}/.*)\\.js$": "$1",
//   },
// };

import type { Config } from "jest";

// const config: Config = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testMatch: ["<rootDir>/src/tests/**/*.test.ts"],
//   verbose: true,
//   setupFiles: ["./jest.setup.ts"],
// };

// const config: Config = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testMatch: ["<rootDir>/src/**/*.test.ts"], // ✅ Only check inside `src` folder
//   testPathIgnorePatterns: ["<rootDir>/dist/"], // ✅ Ignore `dist` folder
//   verbose: true,
//   setupFiles: ["./jest.setup.ts"],
// };
// const config: Config = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testPathIgnorePatterns: ["<rootDir>/src/**/*.test.ts"], // ✅ Only check inside `src` folder
//   testMatch: ["<rootDir>/dist/"], // ✅ Ignore `dist` folder
//   verbose: true,
//   setupFiles: ["./jest.setup.ts"],
// };

// export default config;

// import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  verbose: true,
};

export default config;
