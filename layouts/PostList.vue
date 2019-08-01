<template>
  <div>
    <h1>{{$site.title}}</h1>
    <ul id="default-layout">
      <li v-for="page in $pagination.pages" :key="page.key">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$pagination.pages;
    }
  }
}
</script>