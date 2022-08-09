import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-tutorial-nextjs",
  apiKey: process.env.API_KEY,
});
