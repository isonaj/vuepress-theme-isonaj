<template>
  <main id="site-main" class="site-main outer" role="main">
    <div class="inner">
      <PostFeed />
    </div>
  </main>
</template>
    <!--
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
    -->


<script>
import PostFeed from '../components/PostFeed';

export default {
  components: { PostFeed }
}

</script>
