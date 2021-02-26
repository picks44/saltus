import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronDown,
  faUsers,
  faCogs,
  faCheckDouble,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons'
import VueSmoothScroll from 'v-smooth-scroll'

library.add(faChevronDown, faUsers, faCogs, faCheckDouble, faChevronUp)

createApp(App)
  .use(store)
  .use(router)
  .use(VueSmoothScroll)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
