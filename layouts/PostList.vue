<template>
  <main id="site-main" class="site-main outer" role="main">
    <div class="inner">
      <div class="post-feed">
        <article class="post-card post" v-for="post in $pagination.pages" :key="post.key">
          <router-link class="post-card-image-link" :title="post.title" :to="post.path">
            <div class="post-card-image b-lazy b-loaded" style="background-image: url(&quot;/refactoring-code-restructure-not-rewrite/small_cover.jpg&quot;);"></div>
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
                  {{ post.frontmatter.summary || post.summary }}
                  ...
                </p>
              </section>
            </router-link>
            <footer class="post-card-meta">
              <div class="author-list">
                <div class="author-list-item">
                  <div class="author-name-tooltip">{{ $themeConfig.author }}</div>
                    <a href="/about" class="static-avatar">
                    <img class="author-profile-image" src="/images/Anthony-Square-Color.png" alt="Anthony Ison">
                  </a>
                </div>
              </div>
              <span class="reading-time" v-if="post.readingTime">
                {{ post.readingTime.text }}
              </span>
            </footer>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>
    <!--
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
    -->


<style>
.home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) {
  flex-direction: row;
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  -webkit-box-orient: horizontal;
  -ms-flex: 1 1 100%;
  flex: 1 1 100%;
  -ms-flex-direction: row;
}

.post-card {
    overflow: hidden;
    flex-direction: column;
    min-height: 300px;
    margin: 0 20px 40px;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 5px;
    background: 50%/cover #fff;
    -webkit-box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
    box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    -ms-flex: 1 1 300px;
    flex: 1 1 300px;
    -ms-flex-direction: column;
}
.post-card, .post-feed {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
}


</style>
