<template>
  <div class="app-welcome">
    <div class="app-welcome__content">
      <div class="app-welcome__photo">
        <img src="/home-photo.png"/>
      </div>
      <div class="app-welcome__text">
        <span class="app-welcome__title">Kuba Marek</span>
        <span class="app-welcome__subtitle">Junior Full Stack Developer <br/> Vue.js & Node.js</span>
        <span class="app-welcome__description">{{ $t('welcome:text') }}</span>
        <span class="app-welcome__contact">
          {{ $t('welcome:contact') }}:
          <a target="_blank" href="mailto:kjm@irevall.me" class="mail">kjm@irevall.me</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-welcome',
    data () {
      return {
        scrolling: false,
      }
    },
  };
</script>

<style lang="scss">
  .app-welcome {
    padding-top: 4rem;
    min-height: calc(100vh - 8rem);

    @include laptop-xsmall {
      padding-top: 2rem;
    }
  }

  .app-welcome__content {
    display: flex;
    flex-direction: row;
    justify-content: center;

    @include laptop-xsmall {
      flex-direction: column;
      align-items: center;
    }
  }

  .app-welcome__photo {
    margin-top: 1rem;
    margin-right: 3rem;
  }

  .app-welcome__photo > img {
    width: 200px;
    border-radius: 50%;
    border: 3px #0096e8 solid;
  }

  .app-welcome__title {
    font-family: 'Dosis', sans-serif;
    font-size: 6rem;
    font-weight: 500;
    line-height: 1;

    @include laptop-xsmall {
      text-align: center;
    }
  }

  .app-welcome__subtitle {
    font-family: 'Dosis', sans-serif;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  .app-welcome__text {
    display: flex;
    flex-direction: column;
    max-width: 550px;
    text-align: justify;
    padding-right: calc((200px + 3rem) / 2); // nullify photo, keep text in center
    font-size: 2rem;
    font-weight: 400;

    @include laptop-xsmall {
      padding: 0;
    }

    @include mobile {
      width: auto;
      padding: 0 2rem;
    }
  }

  .app-welcome__description {
    line-height: 1.25;
  }

  .app-welcome__contact, .app-welcome__welcome-rest {
    margin-top: 0.75rem;
  }
</style>
