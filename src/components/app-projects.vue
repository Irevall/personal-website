<template>
  <div class="app-projects">
    <span class="app-projects__title">{{ $t('projects:title')}}</span>
    <div class="app-projects__section app-projects__professional">
      <span class="app-projects__section-title">{{ $t('projects:professional.title')}}</span>
      <experience-project class="app-projects__project" v-for="project in professionalProjects" :key="project.name" v-bind="project"/>
    </div>

    <div class="app-projects__section app-projects__personal">
      <span class="app-projects__section-title">{{ $t('projects:personal.title')}}</span>
      <experience-project class="app-projects__project" v-for="project in personalProjects" :key="project.name" v-bind="project"/>
    </div>
  </div>
</template>

<script>
  import ExperienceProject from '@/components/experience/experience-project';

  export default {
    name: 'app-projects',
    components: { ExperienceProject },
    computed: {
      professionalProjects() {
        return this.$i18n.t('projects:professional.projects', { returnObjects: true });
      },
      personalProjects() {
        return this.$i18n.t('projects:personal.projects', { returnObjects: true });
      }
    },
    methods: {
      toKebabCase(string) {
        return String(string).toLowerCase().replace(' ', '-')
      }
    }
  };
</script>

<style lang="scss">
  .app-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2.5rem;
  }

  .app-projects__title {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .app-projects__professional {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    --project-width: 450px;
    --project-subtitle-font-size: 3rem;

    @include laptop-xsmall {
      --project-width: 400px;
    }

    @include mobile {
      --project-width: 300px;
    }
  }

  .app-projects__personal {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 2rem;

    --project-width: 300px;
    --project-subtitle-font-size: 1.75rem;

    > .app-projects__section-title {
      grid-column: 1 / span 2;
    }

    @include laptop-xsmall {
      grid-template-columns: 1fr;
      --project-width: 400px;

      > .app-projects__section-title {
        grid-column: 1;
      }
    }

    @include mobile {
      --project-width: 300px;
    }
  }

  .app-projects__section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

</style>
