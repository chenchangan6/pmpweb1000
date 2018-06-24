import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createstore = () => new Vuex.Store({
  state: {
    config: [{
      baseapiurl: 'https://api.pmptiku.com',
      // baseapiurl: 'https://api.pmptiku.com',
      login: 'https://api.pmptiku.com/users/login'
    }]

  },
  getters: {

  },
  mutations: {},
  actions: {

  }

})
export default createstore
