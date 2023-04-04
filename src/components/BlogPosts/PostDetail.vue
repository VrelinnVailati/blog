<script setup lang="ts">
import type { Post } from "../../types/Post";
import { cleanHtmlBody } from "../../utils/htmlBody";

type PostDetailProps = {
  post: Post;
};

const { post } = defineProps<PostDetailProps>();

const htmlBody = cleanHtmlBody(post.body);
</script>

<template>
  <div class="border-t rounded-lg border-lion">
    <div class="flex flex-col items-center" v-html="htmlBody" />
  </div>
</template>
