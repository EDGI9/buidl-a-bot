import { shallowMount } from "@vue/test-utils";
import PartSelector from "./PartSelector";
import RobotParts from "@/__mock__/robotParts.js";

describe("PartSelector.vue", () => {
  let wrapper;
  it("Component is rendered", () => {
    wrapper = shallowMount(PartSelector, {
      propsData: {
        parts: RobotParts.heads,
        orientation: "vertical"
      }
    });
  });

  it("Is horizontal", () => {
    wrapper = shallowMount(PartSelector, {
      propsData: {
        parts: RobotParts.heads
      }
    });
    expect(wrapper.classes("c-part-selector--horizontal")).toBe(true);
    expect(wrapper.classes("flex-row")).toBe(true);
  });

  it("Is vertical", () => {
    wrapper = shallowMount(PartSelector, {
      propsData: {
        parts: RobotParts.heads,
        orientation: "vertical"
      }
    });
    expect(wrapper.classes("flex-column")).toBe(true);
  });

  it("Can set different position", () => {
    wrapper = shallowMount(PartSelector, {
      propsData: {
        parts: RobotParts.heads,
        orientation: "vertical",
        position: "left"
      }
    });
    expect(wrapper.get("v-img").classes()).toContain("left");
  });
});
