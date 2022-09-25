import Vue from "vue";
import Vuex from "vuex";
import robotParts from "./robotParts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robotParts
  }
});
