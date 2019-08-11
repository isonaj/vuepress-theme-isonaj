<template>
  <main id="site-main" class="site-main outer">
    <div class="inner">
      <div class="post-feed">
        <Card v-for="(post, index) in $pagination.pages" :post="post" :key="index" />
      </div>
    </div>
  </main>
</template>

<script>
import Card from '../components/Card';

export default {
  components: { Card },
}
</script>

<style lang="scss">
  @import '../styles/post-feed';
</style>
