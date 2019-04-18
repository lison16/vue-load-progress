import VueLoadProgress from './load-progress.vue'

const install = function (Vue, opt = {}) {
  if (install.installed) {
    return
  }

  let ProgressConstructor = Vue.extend(VueLoadProgress)

  const loadProgress = function () {
    let instance = new ProgressConstructor().$mount()
    document.body.appendChild(instance.$el)
    return instance
  }
  Vue.prototype.$loadProgress = loadProgress()
  Vue.component(VueLoadProgress.name, VueLoadProgress)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  VueLoadProgress,
  install
}
