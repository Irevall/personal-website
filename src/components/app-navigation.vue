<template>
  <nav class="navigation">
    <div class="navigation__links">
      <span class="navigation__link navigation__link--active" @click="$emit('jump', 'navigation')">{{ $t('navigation:home') }}</span>
      <span class="navigation__link" @click="$emit('jump', 'projects')">{{ $t('navigation:projects') }}</span>
      <span class="navigation__link" @click="$emit('jump', 'about-me')">{{ $t('navigation:about') }}</span>
    </div>

    <div class="navigation__links navigation__links--short">
      <span class="navigation__link navigation__link--active" @click="$emit('jump', 'navigation')">
        <font-awesome-icon icon="home"></font-awesome-icon>
      </span>
      <span class="navigation__link" @click="$emit('jump', 'projects')">{{ $t('navigation:projects') }}</span>
      <span class="navigation__link" @click="$emit('jump', 'about-me')">{{ $t('navigation:about-short') }}</span>
    </div>

    <div class="navigation__icons">
      <a target="_blank" href="https://github.com/Irevall">
        <img class="navigation__icon navigation__icon--github" src="/github.svg" alt="Github">
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/irevall/">
        <img class="navigation__icon navigation__icon--linkedin" src="/linkedin.svg" alt="Linkedin">
      </a>
      <navigation-language-menu/>
    </div>
  </nav>
</template>

<script>
  import NavigationLanguageMenu from '@/components/navigation/navigation-language-menu';

  export default {
    name: 'navigation',
    components: { NavigationLanguageMenu },
  };
</script>

<style lang="scss">
  .navigation {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    height: 4rem;
    background-color: #1f2a3a;
    font-family: 'Muli', sans-serif;
    box-shadow: 0 1px 1px 0 black;

    @include laptop-xsmall {
      padding: 0 2rem;
    }

    @include mobile {
      padding: 0 1rem;
    }
  }

  .extend, .shrink {
    margin-left: 0.25rem;
    display: none;
    width: 2rem;
  }

  .navigation__links {
    display: flex;

    &--short {
      display: none;
    }

    @include mobile {
      display: none;

      &--short {
        display: flex;
      }
    }
  }

  .navigation__link {
    display: flex;
    align-items: center;
    padding-bottom: 0.25rem;
    height: 100%;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    box-sizing: border-box;

    &:not(:first-child) {
      margin-left: 3.5rem;
    }

    &:hover {
      color: #0096e8;
    }

    &--active {
      color: #0096e8;
      border-bottom: #0096e8 5px solid;
      padding-bottom: 0;
    }

    @include laptop-xsmall {
      &:not(:first-child) {
        margin-left: 2rem;
      }
    }

    @include mobile {
      margin-left: 1rem;
    }
  }

  .navigation__icons {
    @include flex-center;
    flex-direction: row;
  }

  .navigation__icon {
    height: 2rem;
    margin-right: 1rem;
  }
</style>
