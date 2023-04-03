<script setup lang="ts">
import type { Post } from "../../types/Post";

type BlogPostProps = {
  posts: Post[];
};

const { posts } = defineProps<BlogPostProps>();
</script>

<template>
  <div
    class="flex flex-col shadow shadow-dark-purple mb-2"
    v-for="post in posts"
    :key="post.id"
  >
    <a
      :href="`blog/${post.id}`"
      class="hover:bg-light-pink/75 hover:text-black ease-in duration-100"
    >
      <div class="ml-2">
        <div class="flex flex-row items-end">
          <div class="text-sm mr-2 font-big-title text-lion">
            DRM-{{ post.id.toString().padStart(3, "0") }}
          </div>

          <div class="text-2xl font-big-title">{{ post.title }}</div>
        </div>

        <div class="ml-3">
          <p class="text-md">{{ post.description }}</p>
        </div>
      </div>
    </a>
  </div>
</template>
