import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createstore = () => new Vuex.Store({
  state: {
    config: [{
      baseapiurl: 'https://api.pmptiku.com',
      login: 'http://127.0.0.1:5000/users/login'
    }]

  },
  getters: {

  },
  mutations: {},
  actions: {

  }

})
export default createstore
