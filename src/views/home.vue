<template>
  <main>
    <app-welcome ref="welcome" @jump="jumpTo"/>
    <app-projects ref="projects"/>
  </main>
</template>

<script>
  import AppWelcome from '@/components/app-welcome';
  import AppProjects from '@/components/app-projects';

  export default {
    name: 'view-home',
    components: { AppWelcome, AppProjects },
    methods: {
      jumpTo(target) {
        this.$refs[target].$el.scrollIntoView({behavior: 'smooth'});
      },
    }
  };
</script>

<style lang="scss">
  main {
    background-image: url('/dark-background.png');
  }
</style>
