import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/Home.vue'
import WhoIsJesusPage from './pages/Jesus.vue'
import WhoWeArePage from './pages/WhoWeAre.vue'

const routes = [
  { path: '/who-is-jesus', component: WhoIsJesusPage },
  { path: '/who-we-are', component: WhoWeArePage },
  { path: '/', component: HomePage },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
export default router