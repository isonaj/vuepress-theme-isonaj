<template>
  <div>
    <Content />

    <p>Test</p>
    <p>{{$site.theme }}</p>
    <p>{{$site.themeConfig.disqus_shortname }}</p>

    <ClientOnly v-if="$site.themeConfig.disqus_shortname">
      <Disqus :shortname="$site.themeConfig.disqus_shortname" />
    </ClientOnly>
  </div>
</template>

<script>
  import Disqus from 'vuepress-plugin-disqus';
  
  export default {
    name: 'Post',
    components: {
      Disqus
    }
  }
</script>