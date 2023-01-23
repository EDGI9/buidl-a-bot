import { shallowMount } from "@vue/test-utils";
import RobotPreview from "./RobotPreview";
import SelectedParts from "@/__mock__/selectedParts.js";

describe("RobotPreview.vue", () => {
  let wrapper;
  it("Component is rendered", () => {
    wrapper = shallowMount(RobotPreview, {
      propsData: {
        "robot-data": SelectedParts
      }
    });
  });

  it("Shows small preview", () => {
    wrapper = shallowMount(RobotPreview, {
      propsData: {
        "robot-data": SelectedParts,
        "is-small": true
      }
    });
    expect(wrapper.classes()).toContain("c-robot-preview--small");
  });
});
