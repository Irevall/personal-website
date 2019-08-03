<template>
  <div class="app-welcome" @wheel="scrollListener">
    <navigation class="app-welcome__navigation"/>
    <div class="app-welcome__content">
      <div class="app-welcome__photo">
        <img src="/home-photo.png"/>
      </div>
      <div class="app-welcome__text">
        <span class="app-welcome__title">Kuba Marek</span>
        <span class="app-welcome__welcome">{{ $t('welcome:welcome') }}</span>
        <span class="app-welcome__welcome-rest">{{ $t('welcome:welcome-rest') }}</span>
        <span class="app-welcome__contact">
          {{ $t('welcome:contact') }}:
          <a target="_blank" href="mailto:kjm@irevall.me" class="mail">kjm@irevall.me</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/navigation/navigation';

  export default {
    name: 'app-welcome',
    components: { Navigation },
    data () {
      return {
        scrolling: false,
      }
    },
    methods: {
      scrollListener(event) {
        if (event.deltaY > 0) {
          event.preventDefault();
          this.$emit('jump', 'projects');
        }
      },
    }
  };
</script>

<style lang="scss">
  .app-welcome {
    min-height: 100vh;
  }

  .app-welcome__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 1rem;
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
    margin-bottom: 1.75rem;
  }

  .app-welcome__text {
    display: flex;
    flex-direction: column;
    max-width: 550px;
    padding-right: calc((200px + 3rem) / 2); // nullify photo, keep text in center
    font-size: 2.25rem;
    font-weight: 400;
  }

  .app-welcome__contact, .app-welcome__welcome-rest {
    margin-top: 0.5rem;
  }
</style>
