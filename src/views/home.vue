<template>
  <main @wheel="scrollListener">
    <app-navigation ref="navigation" @jump="jumpTo"/>
    <app-welcome ref="welcome" @jump="jumpTo"/>
    <app-projects ref="projects"/>
    <app-about-me ref="about-me"/>
  </main>
</template>

<script>
  import AppNavigation from '@/components/app-navigation';
  import AppWelcome from '@/components/app-welcome';
  import AppProjects from '@/components/app-projects';
  import AppAboutMe from '@/components/app-about-me';

  export default {
    name: 'view-home',
    components: { AppNavigation, AppWelcome, AppProjects, AppAboutMe },
    methods: {
      jumpTo(target) {
        this.$refs[target].$el.scrollIntoView({behavior: 'smooth'});
      },
      scrollListener(event) {
        const navWelcomeHeight = this.$refs.navigation.$el.clientHeight + this.$refs.welcome.$el.clientHeight;

        // TODO: it's not quite clear what it does.
        if (event.deltaY > 0
          && navWelcomeHeight <= window.innerHeight + window.scrollY
          && window.scrollY < navWelcomeHeight) {
          event.preventDefault();
          this.jumpTo('projects');
        }
      }
    }
  };
</script>

<style lang="scss">
  main {
    background-image: url('/dark-background.png');
    padding-bottom: 3rem;
  }
</style>
