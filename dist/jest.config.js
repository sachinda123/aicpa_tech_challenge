"use strict";
// import type { Config } from "jest";
Object.defineProperty(exports, "__esModule", { value: true });
// const config: Config = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testMatch: ["**/tests/**/*.test.ts"],
//   verbose: true,
//   setupFiles: ["./jest.setup.ts"],
// };
// export default config;
exports.default = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
    },
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
};
