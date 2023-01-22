import { shallowMount,createLocalVue  } from "@vue/test-utils";
import RobotPreview from "./RobotPreview";
import SelectedParts from "@/__mock__/selectedParts.js"

describe("RobotPreview.vue", () => {

  it("Component is rendered", () => {
    const wrapper = shallowMount(RobotPreview, { props: {
      'robot-data': SelectedParts
    }})
  });

  it("Shows small preview", () => {
    const wrapper = shallowMount(RobotPreview, { props: {
      'robot-data': SelectedParts,
      'is-small': true
    }})
    expect(wrapper.classes()).toContain('c-robot-preview--small')
  });
  
});
