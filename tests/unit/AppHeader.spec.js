import { shallowMount, mount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

describe("AppHeaders unit tests", () => {

  it("If user is not logged in, do not show button", () => {
    const wrapper = mount(AppHeader)
    expect( wrapper.find('button').isVisible() ).toBe( false )
  });

  it("If user IS logged in, then show the login button", async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })
    // test runs before DOM updated ...
    await wrapper.vm.$nextTick()
    expect( wrapper.find('button').isVisible() ).toBe(true)
  });
  
});
