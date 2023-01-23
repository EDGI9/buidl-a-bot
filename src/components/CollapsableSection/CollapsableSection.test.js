import { shallowMount } from "@vue/test-utils";
import CollapsableSection from "./CollapsableSection";

describe("CollapsableSection.vue", () => {
  const testHtml = "<div>My test content</div>";
  let wrapper;
  it("Component is rendered", () => {
    wrapper = shallowMount(CollapsableSection);
  });

  it("Component renders content in slot", () => {
    wrapper = shallowMount(CollapsableSection, {
      slots: {
        default: testHtml
      }
    });
    expect(wrapper.html()).toContain(testHtml);
  });
});
