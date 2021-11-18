import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    StateBackground: true,
  },
  mutations: {
    ChangeBCK(state) {
      state.StateBackground = !state.StateBackground;
    },
  },
  actions: {
    changeBackground(context) {
      context.commit('ChangeBCK');
    },
  },
  modules: {
  },
});
