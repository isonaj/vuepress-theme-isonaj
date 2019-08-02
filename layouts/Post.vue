<template>
  <main id="site-main" class="site-main outer" role="main">
    <div class="inner">
      <article class="post-full">
        <figure class="post-full-image" style="background-image: url(cover.jpg)">
        </figure>
        <section class="post-full-content">
          <Content />
        </section>
        <section v-if="$themeConfig.disqus" class="post-full-comments">
          <ClientOnly>
            <disqus :shortname="$themeConfig.disqus" />
          </ClientOnly>
        </section>
      </article>
    </div>
  </main>
</template>

<style>
.inner {
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
}
.post-full {
  position: relative;
  z-index: 50;
}
.post-full-content {
  /*font-size: 1.7rem;*/
  line-height: 1.6em;
  position: relative;
  min-height: 230px;
  margin: 0 auto;
  padding: 70px 100px 0;
  background: #fff;
}
.post-full-image {
  height: 800px;
  margin: 0 -10vw -165px;
  border-radius: 5px;
  background: 50%/cover #c5d2d9;
}
.outer {
  position: relative;
  padding: 0 4vw;
}
.site-main {
  z-index: 100;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -ms-flex-positive: 1;
}
/*
@media (max-width: 1170px)
.post-full-content {
  padding: 5vw 7vw 0;
}
*/
</style>

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
<style src="prismjs/themes/prism-okaidia.css"></style>