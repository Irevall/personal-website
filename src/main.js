import Vue from 'vue'
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';
import App from './App.vue'
import router from './router'

Vue.use(VueI18Next);

i18next.init({
    lng: 'pl',
    resources: {
        en: {translation: require('./assets/english') },
        pl: {translation: require('./assets/polish') }
    }
});

const i18n = new VueI18Next(i18next);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    i18n,
    router
}).$mount('#app');