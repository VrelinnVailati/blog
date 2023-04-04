import type { APIRoute } from "astro";
import { getPosts } from "../../data/db";

export const get: APIRoute = async () => {
  const posts = await getPosts();

  return new Response(
    JSON.stringify({
      posts,
    }),
    {
      status: 200,
    }
  );
};
