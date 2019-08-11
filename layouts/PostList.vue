<template>
  <div class="site-wrapper">
    <Header :header="header">
      <Navigation slot="header" isHome="true"></Navigation>
    </Header>
    <PostFeed />

    <!--
    <NextFeed />
    -->
    <Footer />
  </div>    
</template>
    <!--
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
    -->


<script>
import PostFeed from '../components/PostFeed';
import NextFeed from '../components/NextFeed';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default {
  components: { PostFeed, NextFeed, Footer, Header, Navigation },
  computed: {
    header () {
      return {
        showCover: true,
        logo: this.$site.logo,
        coverImage: this.$themeConfig.cover,
        title: this.$site.title,
        description: this.$site.description
      }
    }
  }
}

</script>


<style lang="scss">
  @import '../styles/reset';
  @import '../styles/defaults';

  /* 1. Global - Set up the things
  /* ---------------------------------------------------------- */

  body {
    background: #f4f8fb;
  }

  .img {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 100%;
  }

  .hidden {
    visibility: hidden;
    position: absolute;
    text-indent: -9999px;
  }


  /* 2. Layout - Page building blocks
  /* ---------------------------------------------------------- */

  .site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .site-main {
    z-index: 100;
    flex-grow: 1;
  }

  /* Full width page blocks */
  .outer {
    position: relative;
    padding: 0 4vw;
  }

  /* Centered content container blocks */
  .inner {
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
  }

  /* 3. Special Template Styles
  /* ---------------------------------------------------------- */
  @media (min-width: 900px) {
    .home-template,
    .category-template,
    .tags-template,
    .posts-template,
    .author-template {
      .post-feed {
        margin-top: -70px;
        padding-top: 0;
      }

      .site-nav {
        position: relative;
        top: -70px;
      }
    }

  }

</style>
