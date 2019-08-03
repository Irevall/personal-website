<template>
  <div class="experience-project" :class="{ 'experience-project--hovered': hovered }" @mouseenter="toggleOn" @mouseleave="toggleOff">
    <div class="experience-project__thumbnail">
      <img class="experience-project__image" :src="`/project-screens/${toKebabCase(name)}.png`" @error="onImageError"/>
      <span class="experience-project__name experience-project__name--thumbnail">{{ name }}</span>
    </div>
    <div class="experience-project__information">
      <span class="experience-project__name experience-project__name--information">{{ name }}</span>
      <span class="experience-project__description">{{ description }}</span>
    </div>
    <a class="experience-project__link" v-if="url"  target="_blank" :href="url"></a>
  </div>
</template>

<script>
  export default {
    // name: 'experience-project',
    props: {
      name: String,
      description: String,
      url: {
        default: false,
        required: false,
      },
      // imageUrl: String,
    },
    data() {
      return {
        hovered: false,
        imageError: false,
      }
    },
    methods: {
      toKebabCase(string) {
        return String(string).toLowerCase().replace(' ', '-');
      },
      onImageError() {
        this.imageError = true;
        this.toggleOn();
      },
      toggleOn() {
        this.hovered = true;
      },
      toggleOff() {
        if (!this.imageError) this.hovered = false;
      }
    }
  };
</script>

<style lang="scss">
  .experience-project {
    position: relative;
    display: flex;
    width: var(--project-width);
    height: calc(var(--project-width) / 16 * 9);
    overflow: hidden;
    background: #151935;
    box-sizing: border-box;
    border: 2px solid #0096e8;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  .experience-project__thumbnail {
    display: flex;
    transition: opacity .4s .1s;
    z-index: 3;
  }

  .experience-project__image {
    width: 100%;
    filter: blur(2px) brightness(0.6);
    transition: transform .5s;
  }

  .experience-project__name {
    font-family: 'Muli', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
  }

  .experience-project__name--thumbnail {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .experience-project__name--information {
    font-size: var(--project-subtitle-font-size)
  }

  .experience-project__information {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .experience-project__link {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99;
  }


  .experience-project--hovered {
    .experience-project__thumbnail {
      opacity: 0;
    }

    .experience-project__image {
      transform: scale(1.5);
    }
  }
</style>
