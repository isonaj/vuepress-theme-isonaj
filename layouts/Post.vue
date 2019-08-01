<template>
  <div>
    <Content />

    <p>Test</p>
    <p>{{ $site.themeConfig.disqus_shortname }}</p>
    <p>{{ $themeConfig.disqus_shortname }}</p>

    <p>{{ disqusIdentifier }}</p>
    <p>{{ disqusUrl }}</p>

    <div class="disqus">
      <ClientOnly>
        <Disqus class="mt-30" :shortname="$themeConfig.disqus_shortname" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
  import Disqus from 'vuepress-plugin-disqus';
  import VueDisqus from 'vue-disqus';
  
  export default {
    name: 'Post',
    components: {
      Disqus, VueDisqus
    },
    computed: {
      disqusIdentifier () {
        return this.$page.frontmatter.disqus || this.$page.path
      },
      disqusUrl () {
        return this.$site.themeConfig.domain + this.$page.path
      },
    }
  }
</script>