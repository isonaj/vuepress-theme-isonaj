<template>
  <div id="disqus_thread"></div>
</template>
<script>
  export default {
    mounted() {
      var disqus_config = function () {
        this.page.url = 'https://anthonyison.com/test-me'; // window.location.origin;  
        this.page.identifier = window.location.pathname; 
      };
      (function() {
        var d = window.document, s = d.createElement('script');
        var shortname = 'anthonyison';
        s.src = `https://${shortname}.disqus.com/embed.js`;
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();

    }
  }
</script>