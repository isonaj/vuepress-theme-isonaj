<template>
  <div>
    <Content />

    <p>Test</p>
    <p>{{$site.theme }}</p>
    <p>{{$site.themeConfig.disqus_shortname }}</p>

  <p>$site.themeConfig.disqus_shortname</p>
    <div class="disqus">
      <ClientOnly v-if="$site.themeConfig.disqus_shortname">
        <Disqus 
          :shortname="$site.themeConfig.disqus_shortname" 
          :title="$page.title"
          :identifier="disqusIdentifier" 
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
  import Disqus from 'vuepress-plugin-disqus';
  
  export default {
    name: 'Post',
    components: {
      Disqus
    },
    computed: {
      disqusIdentifier () {
        return this.$page.frontmatter.disqus || this.$page.path
      }
    }
  }
</script>