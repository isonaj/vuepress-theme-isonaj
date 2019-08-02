<template>
  <header class="site-header outer " style="background-image: url(/images/imleedh-ali-677414-unsplash.jpg)">
    <div class="inner">
      <Nav />

      <div class="site-header-content">
        <img class="author-profile-image" src="/images/Anthony-Square-Color.png" alt="Anthony Ison">
        <h1 class="site-title">Anthony Ison</h1>
        <div class="author-meta">
          <a class="author-stats" style="color: white" href="/archives" title="Total: 14">
            Total: 14
            <span class="bull">•</span>
          </a>
          <a class="social-link" title="github" href="https://github.com/isonaj" target="_blank" rel="noopener">
            <svg viewBox="0 0 1049 1024" xmlns="http://www.w3.org/2000/svg"><path d="M524.979332 0C234.676191 0 0 234.676191 0 524.979332c0 232.068678 150.366597 428.501342 358.967656 498.035028 26.075132 5.215026 35.636014-11.299224 35.636014-25.205961 0-12.168395-0.869171-53.888607-0.869171-97.347161-146.020741 31.290159-176.441729-62.580318-176.441729-62.580318-23.467619-60.841976-58.234462-76.487055-58.234463-76.487055-47.804409-32.15933 3.476684-32.15933 3.476685-32.15933 53.019436 3.476684 80.83291 53.888607 80.83291 53.888607 46.935238 79.963739 122.553122 57.365291 152.97411 43.458554 4.345855-33.897672 18.252593-57.365291 33.028501-70.402857-116.468925-12.168395-239.022047-57.365291-239.022047-259.012982 0-57.365291 20.860106-104.300529 53.888607-140.805715-5.215026-13.037566-23.467619-66.926173 5.215027-139.067372 0 0 44.327725-13.906737 144.282399 53.888607 41.720212-11.299224 86.917108-17.383422 131.244833-17.383422s89.524621 6.084198 131.244833 17.383422C756.178839 203.386032 800.506564 217.29277 800.506564 217.29277c28.682646 72.1412 10.430053 126.029806 5.215026 139.067372 33.897672 36.505185 53.888607 83.440424 53.888607 140.805715 0 201.64769-122.553122 245.975415-239.891218 259.012982 19.121764 16.514251 35.636014 47.804409 35.636015 97.347161 0 70.402857-0.869171 126.898978-0.869172 144.282399 0 13.906737 9.560882 30.420988 35.636015 25.205961 208.601059-69.533686 358.967656-265.96635 358.967655-498.035028C1049.958663 234.676191 814.413301 0 524.979332 0z"></path></svg>
          </a>
          <a class="social-link" title="twitter" href="https://twitter.com/isonaj" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
          </a>
          <a class="social-link" title="youtube" href="https://www.youtube.com/channel/UC4_sgo322GFudAjSXbyQdmw" target="_blank" rel="noopener">
            <svg viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path d="m1099.31 248.166c-12.562-47.3-49.574-84.552-96.568-97.194-85.18-22.972-426.742-22.972-426.742-22.972s-341.56 0-426.742 22.972c-46.994 12.644-84.006 49.894-96.568 97.194-22.824 85.734-22.824 264.61-22.824 264.61s0 178.876 22.824 264.61c12.562 47.3 49.574 83 96.568 95.642 85.182 22.972 426.742 22.972 426.742 22.972s341.56 0 426.742-22.972c46.994-12.642 84.006-48.342 96.568-95.642 22.824-85.734 22.824-264.61 22.824-264.61s0-178.876-22.824-264.61zm-635.02 427.016v-324.812l285.478 162.41z"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.author-profile-image {
  z-index: 10;
  width: 100px;
  height: 100px;
  margin: 0 0 20px;
  -webkit-box-shadow: 0 0 0 6px hsla(0,0%,100%,.1);
  box-shadow: 0 0 0 6px hsla(0,0%,100%,.1);
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: block;
  border-radius: 100%;
  background: #e3e9ed;
  -o-object-fit: cover;
  object-fit: cover;
}
.social-link {
  display: flex;
  margin: 0;
  padding: 10px;
  opacity: .8;
  color: #fff;
  align-items: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.site-header:after, .site-header:before {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  display: block;
  content: "";
}
.site-header:before {
  bottom: 0;
  background: rgba(0,0,0,.18);
}
.site-title {
  font-size: 3.8rem;
  font-weight: 700;
  z-index: 10;
  margin: 0;
  padding: 0;
}
</style>

<script>
import Nav from '../components/Nav';
export default {
  name: 'Header',
  components: { Nav }
}
</script>