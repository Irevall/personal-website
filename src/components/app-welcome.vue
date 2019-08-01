<template>
  <div class="app-welcome">
    <navigation/>
    hi
  </div>
</template>

<script>
  import Navigation from '@/components/navigation/navigation';

  export default {
    name: 'app-welcome',
    components: { Navigation }
  };
</script>

<style lang="scss">
  .app-welcome {
    background-image: url('/dark-background.png');
    min-height: 100vh;
  }
</style>
