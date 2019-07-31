<template>
  <div>
    <Content />
    <ClientOnly v-if="$site.themeConfig.disqusShortName">
      <Disqus shortname="{{$site.themeConfig.disqusShortName}}" />
    </ClientOnly>
  </div>
</template>