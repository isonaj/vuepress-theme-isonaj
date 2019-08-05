<template>
  <div class="post-feed">
    <PostCard v-for="post in $pagination.pages" :post="post" />
  </div>
</template>

<script>
import PostCard from '../components/PostCard';

export default {
  components: { PostCard },
  computed: {
    //summary(): { return post.frontmatter.summary || post.summary }
    //    v-for="post in $pagination.pages" :key="post.key"

  }
}
</script>