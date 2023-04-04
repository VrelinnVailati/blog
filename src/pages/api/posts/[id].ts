import type { APIRoute } from "astro";
import { getPost } from "../../../data/db";

export const get: APIRoute = async ({ params }) => {
  const id = params.id;
  const notFoundResponse = new Response(`No post found with id ${id}`, {
    status: 404,
  });

  if (!id) return notFoundResponse;

  const post = await getPost(id);

  if (!post) return notFoundResponse;

  return new Response(JSON.stringify(post), {
    status: 200,
  });
};
