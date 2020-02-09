import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d9c58b38 = () => interopDefault(import('..\\pages\\editor.vue' /* webpackChunkName: "pages_editor" */))
const _bd9b6e7c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _58f200da = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _42d4634c = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages_settings" */))
const _e788ce6a = () => interopDefault(import('..\\pages\\article\\_slug.vue' /* webpackChunkName: "pages_article__slug" */))
const _8469673a = () => interopDefault(import('..\\pages\\profile\\_username.vue' /* webpackChunkName: "pages_profile__username" */))
const _50eab4aa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editor",
    component: _d9c58b38,
    name: "editor"
  }, {
    path: "/login",
    component: _bd9b6e7c,
    name: "login"
  }, {
    path: "/register",
    component: _58f200da,
    name: "register"
  }, {
    path: "/settings",
    component: _42d4634c,
    name: "settings"
  }, {
    path: "/article/:slug?",
    component: _e788ce6a,
    name: "article-slug"
  }, {
    path: "/profile/:username?",
    component: _8469673a,
    name: "profile-username"
  }, {
    path: "/",
    component: _50eab4aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
