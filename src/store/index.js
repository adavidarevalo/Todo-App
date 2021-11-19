import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    StateBackground: true,
    Element: [
      { description: 'Complete online JavaScript course', realized: false },
      { description: 'Job around the park 3x', realized: false },
      { description: '10 minutes meditation', realized: false },
      { description: '10 minutes meditation', realized: false },
      { description: 'Pick up groceries', realized: false },
      { description: 'Complete Todo App on Frontend Mentor', realized: false },
    ],
  },
  mutations: {
    ChangeBCK(state) {
      state.StateBackground = !state.StateBackground;
    },
  },
  actions: {
    changeBackground(context) {
      console.log('Yes baby');
      context.commit('ChangeBCK');
    },
  },
  modules: {
  },
});
