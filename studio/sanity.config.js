import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas/schema.js";
// import Desk from "./deskStructure.js";

export default defineConfig({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "8knpnv8f",
  dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  title: "InGsight Studio",
  studio: { basePath: "/studio" },
  plugins: [deskTool()],
  // structure: Desk(),
  schema: {
    types: schemaTypes,
  },
});
