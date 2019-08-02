<template>
  <main>
    <app-welcome @jump="jumpToProjects"/>
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
      jumpToProjects() {
        console.log(this.$refs.projects);
        this.$refs.projects.$el.scrollIntoView({behavior: 'smooth'});
      },
    }
  };
</script>

<style lang="scss">
  main {
    background-image: url('/dark-background.png');
  }
</style>
