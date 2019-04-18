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
  const loading = loadProgress()
  Vue.prototype.$loading = loading
  Vue.component(VueLoadProgress.name, VueLoadProgress)
  return loading
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(install, {
  VueLoadProgress,
  install
})
