import type { APIRoute } from "astro";

export const get: APIRoute = ({ params }) => {
  const id = params.id;

  return new Response(`This is just one post with id ${id}`, {
    status: 200,
  });
};
