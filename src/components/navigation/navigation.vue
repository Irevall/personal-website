<template>
  <nav class="navigation">
    <div class="navigation__links">
      <router-link class="navigation__link" to="/">{{ $t('welcome:navigation.home') }}</router-link>
      <router-link class="navigation__link" to="/about">{{ $t('welcome:navigation.projects') }}</router-link>
      <router-link class="navigation__link" to="/projects">{{ $t('welcome:navigation.about') }}</router-link>
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
    margin: 0 0 3rem 0;
    height: 4rem;
    background-color: #1f2a3a;
    font-family: 'Muli', sans-serif;
    box-shadow: 0 1px 1px 0 black;
  }

  .extend, .shrink {
    margin-left: 0.25rem;
    display: none;
    width: 2rem;
  }

  .navigation__links {
    display: flex;
  }

  .navigation__link {
    display: flex;
    align-items: center;
    padding-bottom: 0.25rem;
    margin-left: 3.5rem;
    height: 100%;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      color: #0096e8;
    }
  }

  .navigation .router-link-exact-active {
    color: #0096e8;
    border-bottom: #0096e8 5px solid;
    padding-bottom: 0;
  }

  .navigation__icons {
    @include flex-center;
    flex-direction: row;
    margin-right: 2rem;
  }

  .navigation__icon {
    height: 2rem;
    margin-right: 1rem;
  }
</style>
