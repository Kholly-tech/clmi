import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ysyjq2z7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
