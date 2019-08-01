<template>
  <div class="app-welcome">
    <welcome-navigation/>
    hi
  </div>
</template>

<script>
  import WelcomeNavigation from '@/components/welcome/welcome-navigation';

  export default {
    name: 'app-welcome',
    components: { WelcomeNavigation }
  };
</script>

<style lang="scss">
  .app-welcome {
    background-image: url('/assets/dark-background.png');
    min-height: 100vh;
  }
</style>
