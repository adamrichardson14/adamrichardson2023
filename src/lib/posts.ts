import { getCollection } from "astro:content";

export async function getAllPosts() {
  return await getCollection("blog");
}
