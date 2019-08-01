<template>
  <div class="navigation-language-menu" :class="{ 'navigation-language-menu--active': isActive }" @click="toggle">
    <div class="navigation-language-menu__header">
      <img class="navigation-language-menu__language" :src="language.flag" :alt="language.name"/>
    </div>
    <font-awesome-icon icon="chevron-down" class="navigation-language-menu__caret"></font-awesome-icon>

    <transition name="navigation-language-menu__dropdown">
      <div class="navigation-language-menu__dropdown-list" v-show="isActive">
        <div class="navigation-language-menu__dropdown-item" v-for="language in languages">
          <img  class="navigation-language-menu__language" :key="language.code"  :src="language.flag" :alt="language.code" @click="selectLanguage(language)"/>
          <span class="navigation-language-menu__language-name">{{ language.name }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import pl from 'svg-country-flags/png100px/pl.png'
  import gb from 'svg-country-flags/png100px/gb.png'

  export default {
    name: 'navigation-language-menu',
    data () {
      return {
        isActive: false,
        languages: {
          pl: { code: 'pl', name: 'Polski', flag: pl },
          en: { code: 'en', name: 'English', flag: gb }
        },
        languageCode: this.$i18n.i18next.language
      }
    },
    computed: {
      language () {
        return this.languages[this.languageCode];
      }
    },
    mounted () {
      window.addEventListener('click', this.onBackgroundClick);
    },
    beforeDestroy () {
      window.removeEventListener('click', this.onBackgroundClick);
    },
    methods: {
      async selectLanguage(language) {
        await this.$i18n.i18next.changeLanguage(language.code);
        this.languageCode = this.$i18n.i18next.language;
      },
      toggle () {
        const isActive = !this.isActive;
        setImmediate(() => this.isActive = isActive);
      },
      onBackgroundClick() {
        this.isActive = false;
      }
    },
  }
</script>

<style lang="scss">
  .navigation-language-menu {
    @include flex-center;
    flex-direction: row;
    position: relative;
  }

  .navigation-language-menu__header {
    display: flex;
  }

  .navigation-language-menu__caret {
    font-size: 1.25rem;
    margin-left: 0.25rem;
  }

  .navigation-language-menu__language {
    height: 1.5rem;
    width: 2.5rem;
    border-radius: 5px;
    border: black solid 1px;
  }

  .navigation-language-menu__dropdown {
    @include flex-center;
    cursor: pointer;
    color: var(--color-text-muted);
    padding: 1.25rem;
    transition: color .3s;
    position: relative;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    user-select: none;

    @include desktop-small {
      padding: 1.25rem 1rem;
    }

    @include mobile-big {
      padding: 1.25rem 0.5rem;
    }

    @include mobile {
      padding: 0.5rem 0.5rem;
    }

    &--active {
      color: white;
    }
  }

  .navigation-language-menu__dropdown-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -1rem;
    top: 2.25rem;
    width: 10rem;
    padding: 0.5rem 0.75rem;
    z-index: 10;
    background-color: #344155;
    border-radius: 0.55rem;
    transform-origin: top;
    filter: drop-shadow(0 0 5px rgba(black, 0.5));

    &:before {
      @include pseudo;
      top: -0.375rem;
      right: 1rem;
      border-bottom: 0.375rem solid #344155;
      border-right: 0.5rem solid transparent;
      border-left: 0.5rem solid transparent;
    }

    @include desktop-small {
      right: calc(-10.1875rem / 2 + 1.25rem);
    }

    @include mobile-big {
      right: calc(-10.1875rem / 2 + 0.75rem);
    }

    @include mobile {
      width: 9.5rem;
      right: -0.75rem;
      top: 2.5rem;

      &:before {
        right: 1rem;
      }
    }
  }

  .navigation-language-menu__dropdown-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.25rem 0;
   }

  .navigation-language-menu__language-name {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }

  .navigation-language-menu__dropdown-enter, .navigation-language-menu__dropdown-leave-to {
    transform: translateY(1rem);
    opacity: 0;
  }

  .navigation-language-menu__dropdown-enter-active, .navigation-language-menu__dropdown-leave-active {
    transition: transform .3s, opacity .3s;
  }

  .navigation-language-menu__dropdown__caret {
    align-self: flex-end;
    font-size: 0.75rem;
    margin-left: 0.5rem;
    margin-bottom: 0.0625rem;
    margin-right: -0.0625rem;
  }

  .navigation-language-menu__dropdown-item:not(:last-child) {
    border-bottom: 1px solid #f5f5f5;
  }
</style>
