import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    file: [],
    fileSecond: [],
    fileName: "",
    fileNameSecond: "",
    dataFail: "",
    dataFail2: ""
  },
  getters: {
  },
  mutations: {
    GET_DATA_FILE_FIRST: (state, payload) => {
      state.file = payload;
    },
    GET_DATA_FILE_SECOND: (state, payload) => {
      state.fileSecond = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
