<template>
  <div class="app-about-me">
    <span class="app-about-me__title">{{ $t('about-me:title')}}</span>
    <div class="app-about-me__about">
      <div><span>{{ $t('about-me:text')}}</span></div>
    </div>
    <div class="app-about-me__skills">
      <div class="app-about-me__skill-section">
        <span class="skill-section__title">{{ $t('about-me:frontend.title')}}</span>
        <ul class="skill-section__list">
          <li class="skill-section__item" v-for="element of frontendList">{{ element }}</li>
        </ul>
      </div>

      <div class="app-about-me__skill-section">
        <span class="skill-section__title">{{ $t('about-me:backend.title')}}</span>
        <ul class="skill-section__list">
          <li class="skill-section__item" v-for="element of backendList">{{ element }}</li>
        </ul>
      </div>

      <div class="app-about-me__skill-section">
        <span class="skill-section__title">{{ $t('about-me:misc.title')}}</span>
        <ul class="skill-section__list">
          <li class="skill-section__item" v-for="element of miscList">{{ element }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-about-me',
    computed: {
      frontendList() {
        return this.$i18n.t('about-me:frontend.list', { returnObjects: true });
      },
      backendList() {
        return this.$i18n.t('about-me:backend.list', { returnObjects: true });
      },
      miscList() {
        return this.$i18n.t('about-me:misc.list', { returnObjects: true });
      },
    },
  };
</script>

<style lang="scss">
  .app-about-me {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 4rem 0;

    @include mobile {
      padding: 2.5rem 1rem 0;
    }
  }

  .app-about-me__title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .app-about-me__about {
    font-size: 1.25rem;
    width: 600px;
    text-align: justify;
    margin-bottom: 4rem;

    @include laptop-xsmall {
      width: 400px;
    }

    @include mobile {
      width: 300px;
    }
  }

  .app-about-me__skills {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-evenly;
    width: 100%;
  }

  .skill-section__title {
    font-size: 2rem;
  }

  .skill-section__list {
    padding-left: 1.75rem;
  }
</style>
