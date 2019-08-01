<template>
  <nav>
    <div class="shrink">
      <i class="fa fa-times"></i>
    </div>
    <div class="extend">
      <i class="fa fa-bars"></i>
    </div>
    <router-link to="/">{{ $t('welcome:navigation.home') }}</router-link>
    <router-link to="/about">{{ $t('welcome:navigation.projects') }}</router-link>
    <router-link to="/projects">{{ $t('welcome:navigation.contact') }}</router-link>
<!--    <div class="icons">-->
<!--      <a class="github" target="_blank" href="https://github.com/Irevall"><img src="./assets/github.svg" alt="Github"></a>-->
<!--      <div class="flags" @mouseenter="flagEnter" @mouseleave="flagSwitch($i18n.i18next.language)">-->
<!--        <img class="flag-en" src="./assets/en-flag.png" alt="English language" @click="changeLanguage('en')"/>-->
<!--        <img class="flag-pl" src="./assets/pl-flag.png" alt="Język polski" @click="changeLanguage('pl')"/>-->
<!--      </div>-->
<!--    </div>-->
  </nav>
</template>

<script>
  export default {
    name: 'nav'
  };
</script>

<style scoped>

</style>
