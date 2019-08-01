<template>
  <div>
    <Content />

    <div class="disqus">
      <ClientOnly>
        <disqus :shortname="$themeConfig.disqus_shortname" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
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