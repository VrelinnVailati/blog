<script lang="ts" setup>
import BlogPost from "./BlogPost.vue";

const { posts } = await fetch("http://localhost:3000/api/posts").then((res) =>
  res.json()
);
</script>

<template>
  <ul>
    <BlogPost :posts="posts" />
  </ul>
</template>
