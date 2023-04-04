import type { Post } from "../types/Post";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getPosts = (): Promise<Post[]> => {
  return prisma.posts.findMany();
};

export const getPost = (id: string): Promise<Post | null> => {
  return prisma.posts.findUnique({
    where: {
      id,
    },
  });
};
