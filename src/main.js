import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from './router.config.js'
const router = new VueRouter(routes) 
Vue.use(VueRouter)
import vuex from 'vuex'
Vue.use(vuex)


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
