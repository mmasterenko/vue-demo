// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import App from './App'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAYBCmmet58fsmlt9BwOh37xBtzNLQj-_I',
      authDomain: 'itc-ads-20190.firebaseapp.com',
      databaseURL: 'https://itc-ads-20190.firebaseio.com',
      projectId: 'itc-ads-20190',
      storageBucket: 'itc-ads-20190.appspot.com',
      messagingSenderId: '401547622690'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
