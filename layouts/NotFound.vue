<template>
  <div class="site-wrapper">
    <site-header :blog="blog" :header="header">
      <nav class="site-nav-center">
        <a :href="blog.base" class="site-nav-logo">
          <img v-if="blog.logo" class="site-logo" :src="blog.logo" :alt="blog.title" />
          <span v-else>{{ blog.title }}</span>
        </a>
      </nav>
    </site-header>

    <main id="site-main" class="site-main outer">
      <div class="inner">
        <error description="Page not found" code="404" :link="blog.base" />
      </div>
    </main>

    <aside class="outer" v-if="posts.length > 0">
      <div class="inner">
        <div class="post-feed">
          <card v-for="(post, index) in posts.slice(0, 3)" :post="post" :key="index" />
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import Card from '../components/Card';
import SiteHeader from '../components/Header';
import Error from '../components/Error'

export default {
  data() {
    return {
    };
  },
  components: { SiteHeader, Card, Error },
  methods: {
    updateLayoutClass() {
      this.$el.parentNode.className = `error-template`;
    }
  },
  computed: {
    header() {
      return {
        showCover: false,
        coverImage: null,
        title: null,
        description: null,
        logo: this.$themeConfig.logo,
      }
    },
    blog() {
      return {
        title: this.$site,
        base: this.$site.base,
        logo: this.$themeConfig.logo
      }
    },
    posts() {
      return this.$pages;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/reset";
@import "../styles/defaults";

/* 1. Global - Set up the things
  /* ---------------------------------------------------------- */

body {
  background: #f4f8fb;
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

.site-nav-logo {
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 11px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;
}

.site-nav-logo:hover {
  text-decoration: none;
}

.site-nav-logo img {
  display: block;
  width: auto;
  height: 21px;
}

/* 9. Error Template
  /* ---------------------------------------------------------- */

.error-template .site-main {
  padding: 7vw 4vw;
}

.site-nav-center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.site-nav-center .site-nav-logo {
  margin-right: 0;
}
</style>
