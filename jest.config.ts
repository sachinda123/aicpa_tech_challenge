import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  verbose: true,
  setupFiles: ["./jest.setup.ts"],
};

export default config;
