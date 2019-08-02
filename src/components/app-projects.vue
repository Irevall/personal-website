<template>
  <div class="app-projects">
    <span class="app-projects__title">{{ $t('projects:title')}}</span>
    <div class="app-projects__professional-work">
      <span class="app-projects__section-title">{{ $t('projects:professional.title')}}</span>
      <span class="app-projects__section-subtitle">{{ $t('projects:professional.subtitle')}}</span>
      <div class="app-projects__project" v-for="project in professionalProjects">
        <span class="app-projects__project-title">{{ project.name }}</span>
        <div class="app-projects__project-image">
          <img :src="`/project-screens/${toKebabCase(project.name)}.png`">
        </div>
        <span>{{ project.description }}</span>
        <span><a target="_blank" :href="project.url">Live version</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-projects',
    computed: {
      professionalProjects() {
        return this.$i18n.t('projects:professional.projects', { returnObjects: true });
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
  }

  .app-projects__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .app-projects__professional-work {
    display: flex;
    flex-direction: column;
  }

  .app-projects__project {
    display: flex;
    flex-direction: column;

  }

  .app-projects__project-image {
    > img {
      width: 500px;
    }

  }
</style>
