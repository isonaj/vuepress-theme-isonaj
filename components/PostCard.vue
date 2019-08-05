<template>
  <article class="post-card post">
    <router-link class="post-card-image-link" :title="post.title" :to="post.path">
      <div class="post-card-image b-lazy b-loaded" :style="{ backgroundImage: `url('${ post.frontmatter.image }')`}"></div>
    </router-link>
    <div class="post-card-content">
      <router-link class="post-card-content-link" :title="post.title" :to="post.path">
        <header class="post-card-header">
          <span class="post-card-tags">
            <span v-for="tag in post.frontmatter.tags" :key="tag.key">{{ tag }} | </span> 
            <time v-if="post.frontmatter.date" :datetime="post.frontmatter.date" itemprop="datePublished">
              {{ new Date(post.frontmatter.date.trim()).toDateString() }}
            </time>
          </span>
          <h2 class="post-card-title">{{ post.title }}</h2>
        </header>
        <section class="post-card-excerpt">
          <p>
            {{ summary }}
            ...
          </p>
        </section>
      </router-link>
      <footer class="post-card-meta">
        <div class="author-list">
          <div class="author-list-item">
            <div class="author-name-tooltip">{{ $themeConfig.author }}</div>
              <a href="/about" class="static-avatar">
              <img class="author-profile-image" src="/images/Anthony-Square-Color.png" :alt="$themeConfig.author">
            </a>
          </div>
        </div>
        <span class="reading-time" v-if="post.readingTime">
          {{ post.readingTime.text }}
        </span>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: Object
  },
  computed: {
    summary() {
      return this.post.frontmatter.summary || this.post.summary;
    }
  }
}
</script>