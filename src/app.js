import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

Vue.use(VueRouter)

export default () => {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About }
    ]
  })
  
  const app = new Vue({
    router,
    render: h => h(App)
  })

  return { app, router }
}