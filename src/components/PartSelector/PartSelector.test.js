import { shallowMount } from "@vue/test-utils";
import PartSelector from "./PartSelector";
import RobotParts from "@/__mock__/robotParts.js";
console.log(RobotParts)

describe("PartSelector.vue", () => {
  it("Component is rendered", () => {
    const wrapper = shallowMount(PartSelector, {
      props: {
        parts: RobotParts.heads,
        orientation: 'vertical'
      }
    })
  });

  it("Is horizontal", () => {
    const wrapper = shallowMount(PartSelector, {
      props: {
        parts: RobotParts.heads,
      }
    })
    expect(wrapper.classes()).toContain('c-part-selector--horizontal flex-row')
  });

  it("Is vertical", () => {
    const wrapper = shallowMount(PartSelector, {
      props: {
        parts: RobotParts.heads,
        orientation: 'vertical'
      }
    })
    expect(wrapper.classes()).toContain('flex-column')
  });

  it("Can set different position", () => {
    const wrapper = shallowMount(PartSelector, {
      props: {
        parts: RobotParts.heads,
        orientation: 'vertical',
        position: 'left'
      }
    })
    expect(wrapper.get('img').classes()).toContain('left')
  });

});
