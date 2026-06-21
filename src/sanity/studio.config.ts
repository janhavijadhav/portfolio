import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@sanity-root/schemas";
import { getDataset, getProjectId } from "@sanity-root/lib/env";

export function createStudioConfig() {
  return defineConfig({
    name: "portfolio-studio",
    title: "Portfolio CMS",
    projectId: getProjectId(),
    dataset: getDataset(),
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  });
}
