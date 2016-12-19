// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'font-awesome/less/font-awesome.less'
import 'bootstrap/less/bootstrap.less'
import 'slimscroll/example/ssmaster/jquery.slimscroll'
import './assets/less/main.less'
import './assets/less/skins/all-skins.less'
import './assets/js/app'
import Vue from 'vue'
import App from './components/App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
