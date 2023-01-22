import { shallowMount } from "@vue/test-utils";
import CollapsableSection from "./CollapsableSection";

describe("CollapsableSection.vue", () => {
  const testHtml = "<div>My test content</div>";

  it("Component is rendered", () => {
    const wrapper = shallowMount(CollapsableSection)
  });
 
  it("Component renders content in slot", () => {
    const wrapper = shallowMount(CollapsableSection, {
      slots: {
        default: testHtml
      }
    });
    expect(wrapper.html()).toContain(testHtml);
  });
});
