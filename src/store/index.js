import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "shanghai",
    list: [
      {
        id: 1,
        title: 'Fore'
      },
      {
        id: 2,
        title: 'Dawn'
      },
      {
        id: 3,
        title: 'Lin'
      }
    ]
  },
  getters: {
    filterList: state => {
      return state.list.map(item => item.title);
    }
  },
  mutations: {
    changeCity(state) {
      state.city = 'beijing'
    },
    changeList(state,val) {
      setTimeout(() => {
        state.list.push(val);
      },2000)
    }
  },
  actions: {
    changeList({commit},val) {
      commit('changeList',val)
    }
  },
  modules: {}
});