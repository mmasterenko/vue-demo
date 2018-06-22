// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import App from './App'
import router from './router'
import store from './store'
import BuyModalComponent from '@/components/Shared/BuyModal'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

Vue.component('app-buy-modal', BuyModalComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAmDyWyU4Z183GOLTYLz7SoGFcBFUDwT3E',
      authDomain: 'vue-shop-1.firebaseapp.com',
      databaseURL: 'https://vue-shop-1.firebaseio.com',
      projectId: 'vue-shop-1',
      storageBucket: 'vue-shop-1.appspot.com',
      messagingSenderId: '756351838423'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('main.js: fb.onAuthStateChanged: ', user.uid)
        this.$store.dispatch('autoLoginUser', user.uid)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})

console.log(vm)
