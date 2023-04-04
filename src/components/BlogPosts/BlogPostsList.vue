<script lang="ts" setup>
import BlogPost from "./BlogPost.vue";

const { posts } = await fetch(`${import.meta.env.API_URL}/posts`).then((res) =>
  res.json()
);
</script>

<template>
  <ul>
    <BlogPost :posts="posts" />
  </ul>
</template>
