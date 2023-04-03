<script setup lang="ts">
import type { Post } from "../../types/Post";

type PostDetailProps = {
  post: Post;
};

const { post } = defineProps<PostDetailProps>();
</script>

<template>
  <div class="border-t rounded-lg border-lion">
    <p class="text-lg mx-2.5">{{ post.body }}</p>
  </div>
</template>
