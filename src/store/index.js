import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let Container = [
  { description: 'Complete online JavaScript course', realized: false },
  { description: 'Job around the park 3x', realized: false },
  { description: '10 minutes meditation', realized: false },
  { description: '10 minutes meditation', realized: false },
  { description: 'Pick up groceries', realized: false },
  { description: 'Complete Todo App on Frontend Mentor', realized: false },
];

export default new Vuex.Store({
  state: {
    StateBackground: true,
    Element: Container,
  },
  mutations: {
    ChangeBCK(state) {
      state.StateBackground = !state.StateBackground;
    },
    CreateElement(state, payload) {
      Container.unshift(payload);
      state.Element = Container;
    },
    deleteElement(state, payload) {
      Container = Container.filter((item) => item.description !== payload && { item });
      state.Element = Container;
    },
    ChagedButton(state, payload) {
      Container[payload].realized = !Container[payload].realized;
    },
    ActionElements(state, payload) {
      if (payload === 0) {
        state.Element = Container;
      } else if (payload === 1) {
        state.Element = Container.filter((item) => item.realized === false && { item });
      } else if (payload === 2) {
        state.Element = Container.filter((item) => item.realized === true && { item });
      } else if (payload === 3) {
        Container = Container.filter((item) => item.realized !== true && { item });
        state.Element = Container;
      }
    },
  },
  actions: {
    changeBackground({ context }) {
      context.commit('ChangeBCK');
    },
  },
  modules: {
  },
});
