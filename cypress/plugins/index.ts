import { startDevServer } from "@cypress/vite-dev-server";
import path from "path";

export default (on: any, config: any) => {
  on("dev-server:start", (options: any) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, "..", "..", "vite.config.ts"),
      },
    });
  });
  return config;
};
