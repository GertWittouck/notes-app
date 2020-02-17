import Vue from "vue";
import Vuex from "vuex";
import TodosStore from "./modules/todosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    TodosStore
  }
});
