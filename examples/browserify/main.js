// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueAnalytics from 'vue-ua'
import ElementUI from 'element-ui'
import App from './App.vue'
import ProseMirror from '../../'
const fs = require('fs')
const insertCss = require('insert-css')
insertCss(fs.readFileSync('./node_modules/normalize.css/normalize.css').toString())
insertCss(fs.readFileSync('./node_modules/normalize.css/normalize.css').toString())

const pkg = require('../../package.json')

Vue.use(ElementUI)
Vue.use(ProseMirror)
Vue.use(VueAnalytics, {
  appName: 'vue-prosemirror-2',
  appVersion: pkg.version,
  trackingId: 'UA-52604616-4',
  debug: true
})

new Vue({ // eslint-disable-line no-new,
  el: '#app',
  mounted () {
    if (process.env.NODE_ENV === 'production') {
      this.$ua.trackEvent('create', 'UA-52604616-4', 'auto')
      this.$ua.trackEvent('send', 'pageview')
    }
  },
  render: (h) => h(App)
})
