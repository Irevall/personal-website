<template>
  <div class="portfolio">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'portfolio',
    data: function() {
      return {
      }
    },
  }
</script>

<style lang="scss">
  @import '@/assets/style/global.scss';

  .portfolio {
    display: grid;
    grid-template-rows: auto;
  }
</style>
