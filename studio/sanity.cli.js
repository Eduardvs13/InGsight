import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "8knpnv8f",
    dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  },
  deployment: {
    appId: "saxnl48no1qej8thavb7iuni",
  },
});
