import { shallowMount, createLocalVue  } from "@vue/test-utils";
import RobotBuilder from "./RobotBuilder";
import Vuex from 'vuex'
import RobotParts from "../../__mock__/robotParts";

const localVue = createLocalVue()

localVue.use(Vuex)

describe("RobotBuilder.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      UPDATE_HEAD: jest.fn(),
      UPDATE_TORSO: jest.fn(),
      UPDATE_LEFT_ARM: jest.fn(),
      UPDATE_RIGHT_ARM: jest.fn(),
      UPDATE_BASE: jest.fn(),
    };
    getters = {
      PARTS: () => RobotParts
    };

    store = new Vuex.Store({
      modules: {
        robotParts: {
          namespaced: true,
          getters,
          actions
        },
      },
    });
  });

  it("Component is rendered", () => {
    const wrapper = shallowMount(RobotBuilder, {
      store,
      localVue 
    })
  });
});
