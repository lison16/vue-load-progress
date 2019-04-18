import App from './app.vue'
import Vue from 'vue'
// import VueLoadProgress from '../../dist/vue-load-progress.min'
import VueLoadProgress from '../../src'
console.log(VueLoadProgress)
Vue.use(VueLoadProgress)

if (typeof window !== 'undefined') {
  /* eslint no-new: 0 */
  new Vue({
    el: '#app',
    render: h => h(App)
  })
}
