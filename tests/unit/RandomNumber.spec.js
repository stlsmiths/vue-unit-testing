import { shallowMount, mount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber.vue";

describe("RandomNumber unit tests", () => {

  it("By default, random number is 0", () => {
    const wrapper = mount(RandomNumber)
    expect( wrapper.html() ).toContain('<span>0</span>')
  });

  it("After button click, random number should be between 1 and 10", async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    const randomNumber = parseInt(wrapper.find('span').element.textContent)

    expect( randomNumber ).toBeGreaterThanOrEqual(1)
    expect( randomNumber ).toBeLessThanOrEqual(10)
  });

  it("can set props", async () => {
    const wrapper = mount(RandomNumber,{
      propsData: {
         min: 200, max: 300
      }
    })
    expect( wrapper.vm.$props.min ).toBe(200)
    expect( wrapper.vm.$props.max ).toBe(300)
  })

  it("If a button is clicked with props, min and max should fall between 200 and 300", async () => {
    const wrapper = mount(RandomNumber,{
      propsData: {
         min: 200, max: 300
      }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    const randomNumber = parseInt(wrapper.find('span').element.textContent)

    expect( randomNumber ).toBeGreaterThanOrEqual(200)
    expect( randomNumber ).toBeLessThanOrEqual(300)
  })

});
