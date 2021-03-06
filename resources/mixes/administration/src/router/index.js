import Vue from 'vue';
import Router from 'vue-router';

import Debug from '../pages/Debug.vue';
import Dashboard from '../pages/Dashboard.vue';
import Expand from '../pages/Expand.vue';
import Extension from '../pages/Extension.vue';
import Layout from '../layouts/Layout.vue';
import Login from '../pages/Login.vue';
import Mail from '../pages/Mail.vue';
import Module from '../pages/Module.vue';
import Navigation from '../pages/Navigation.vue';
import Seo from '../pages/Seo.vue';
import Setting from '../pages/Setting.vue';
import Template from '../pages/Template.vue';
import Upload from '../pages/Upload.vue';

import requireAuth from '../middlewares/auth';

Vue.use(Router);

const configuration = [
    {
        beforeEnter: requireAuth,
        component: Debug,
        path: 'debug',
    },
    {
        beforeEnter: requireAuth,
        component: Expand,
        path: 'expand',
    },
    {
        beforeEnter: requireAuth,
        component: Extension,
        path: 'extension',
    },
    {
        beforeEnter: requireAuth,
        component: Mail,
        path: 'mail',
    },
    {
        beforeEnter: requireAuth,
        component: Module,
        path: 'module',
    },
    {
        beforeEnter: requireAuth,
        component: Navigation,
        path: 'navigation',
    },
    {
        beforeEnter: requireAuth,
        component: Seo,
        path: 'seo',
    },
    {
        beforeEnter: requireAuth,
        component: Setting,
        path: 'setting',
    },
    {
        beforeEnter: requireAuth,
        component: Template,
        path: 'template',
    },
    {
        beforeEnter: requireAuth,
        component: Upload,
        path: 'upload',
    },
];

export default {
    init(injection) {
        const routes = [
            {
                children: [
                    {
                        beforeEnter: requireAuth,
                        component: Dashboard,
                        path: '/',
                    },
                    ...configuration,
                    ...injection.routes.extension,
                    ...injection.routes.module,
                    ...injection.routes.other,
                ],
                component: Layout,
                path: '/',
            },
            {
                component: Login,
                path: '/login',
            },
        ];
        return new Router({
            routes,
        });
    },
};