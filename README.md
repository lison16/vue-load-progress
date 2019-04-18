# vue-load-progress

[![npm package](https://img.shields.io/npm/v/vue-load-progress.svg)](https://www.npmjs.com/package/vue-load-progress)

> Secondary development based on vue-top-progress

# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0`

# Installation

``` bash
$ npm install vue-load-progress
```
# Demo
[Demo](https://lison16.github.io/vue-load-progress/)

# Usage

### Mode 1

``` html
<template>
  <vue-load-progress ref="progress"></vue-load-progress>
</template>

<script>
import { VueLoadProgress } from 'vue-top-progress'
export default {
  components: {
    VueLoadProgress
  },
  mounted () {
    this.$refs.progress.start()
    // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.progress.done()
    }, 2000)
  }
}
</script>
```

### Mode 2

```javascript
// main.js
import Vue from 'vue'
import VueLoadProgress from 'vue-load-progress'
Vue.use(VueLoadProgress)
new Vue({
  //...
})
```
``` html
<template>
  <vue-load-progress ref="progress"></vue-load-progress>
</template>

<script>
export default {
  mounted () {
    this.$refs.progress.start()
    // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.progress.done()
    }, 2000)
  }
}
</script>
```

### Mode 3

```javascript
// test.js
import $loading from 'vue-load-progress'

$loading.height = 2

$loading.start()

setTimeout(() => {
  $loading.done()
}, 2000)
```

# Props

`speed`

Transition speed, in ms. Default: `350`

`easing`

Transition function. Default: `linear`

`color`

Color of progress bar. Default: `#29d`

`colorShadow`

Shadow of progress bar. If omitted, will use progress bar color.

`errorColor`

Color of progress bar when status is error. Default: `#f44336`

`height`

Height of progress bar. Default: `3`

`trickle`

Turn off the automatic incrementing behavior by setting this to `false`. Default: `true`

`trickleSpeed`

How often to trickle, in ms. Default: `250`

`minimum`

Minimum percentage used upon starting. Default: `0.8`

`maximum`

By default behavior, when progress start, it will never get to 100% until `done` or `fail` to be called. Setting this to adjust maximum percentage. Default: `97.5`

`zIndex`

The z-index of component. Default: `9999`

# License

[The MIT License](http://opensource.org/licenses/MIT)
