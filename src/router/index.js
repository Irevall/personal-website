import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import about from '../components/about.vue'
import projects from '../components/projects.vue'
import resume from '../components/resume.vue'
import not_found from '../components/not_found.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/projects',
            component: projects
        },
        {
            path: '/resume',
            component: resume
        },
        {
              path: '/404',
            name: 'not_found',
            component: not_found
        },
        {
            path: '*',
            redirect: '/404'
        },
    ]
})