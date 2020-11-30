import Vue from "vue";
import Router from "vue-router";
import Landing from "./components/landing/Landing.vue";
import store from './store/index'
import config from "@/config";

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Landing
        },
        {
            path: "/register",
            name: "account",
            component: () =>
                import(/*webpackChunkName:"account"*/  "./components/registration/CreateAccount")
        },
        {
            path: "/workspace",
            name: "workspace",
            beforeEnter: async (to, from, next) => {
                if (await store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                }) === true) {
                    // You can use store variable here to access globalError or commit mutation
                    next(true)
                } else {
                    next('/')
                }
            },
            component: () =>
                import(/*webpackChunkName:"workspace"*/  "./components/workspace/Workspace")
        },
        {
            path: "/workspace/groups",
            name: "groups",
            beforeEnter: async (to, from, next) => {
                if (await store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                }) === true) {
                    // You can use store variable here to access globalError or commit mutation
                    next(true)
                } else {
                    next('/')
                }
            },
            component: () =>
                import(/*webpackChunkName:"groups"*/  "./components/workspace/Groups")
        },
        {
            path: "/workspace/profile",
            name: "profile",
            beforeEnter: async (to, from, next) => {
                if (await store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                }) === true) {
                    // You can use store variable here to access globalError or commit mutation
                    next(true)
                } else {
                    next('/')
                }
            },
            component: () =>
                import(/*webpackChunkName:"groups"*/  "./components/workspace/Profile")
        },
        {
            path: "/workspace/logs",
            name: "logs",
            beforeEnter: async (to, from, next) => {
                if (await store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                }) === true) {
                    // You can use store variable here to access globalError or commit mutation
                    next(true)
                } else {
                    next('/')
                }
            },
            component: () =>
                import(/*webpackChunkName:"logs"*/  "./components/workspace/Logs")
        },
        {
            path: "/workspace/secrets",
            name: "secrets",
            beforeEnter: async (to, from, next) => {
                if (await store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                }) === true) {
                    // You can use store variable here to access globalError or commit mutation
                    next(true)
                } else {
                    next('/')
                }
            },
            component: () =>
                import(/*webpackChunkName:"secrets"*/  "./components/workspace/Secrets")
        },
        {
            path: "/workspace/sharings",
            name: "sharings",
            beforeEnter: async (to, from, next) => {
                if (await store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                }) === true) {
                    // You can use store variable here to access globalError or commit mutation
                    next(true)
                } else {
                    next('/')
                }
            },
            component: () =>
                import(/*webpackChunkName:"sharings"*/  "./components/workspace/Sharing")
        },
        {
            path: "/workspace/users",
            name: "users",
            beforeEnter: async (to, from, next) => {
                if (await store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                }) === true) {
                    // You can use store variable here to access globalError or commit mutation
                    next(true)
                } else {
                    next('/')
                }
            },
            component: () =>
                import(/*webpackChunkName:"users"*/  "./components/workspace/Users")
        },
        {
            path: "/workspace/agents",
            name: "agents",
            beforeEnter: async (to, from, next) => {
                if (await store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                }) === true) {
                    // You can use store variable here to access globalError or commit mutation
                    next(true)
                } else {
                    next('/')
                }
            },
            component: () =>
                import(/*webpackChunkName:"account"*/  "./components/workspace/Agents")
        },
        {
            path: "/callback",
            name: "callback",
            component: () =>
                import(/*webpackChunkName:"users"*/  "./components/Callback")
        },

    ]
})



