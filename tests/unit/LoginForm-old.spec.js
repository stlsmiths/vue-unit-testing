import LoginForm from "@/components/LoginFormOLD.vue"
import { mount } from '@vue/test-utils'

describe('LoginForm unit tests',  () => {

    /*
    When designing user interaction tests, think of how the user will use the form
    1. Find text input
    2. Enter value for text
    3. Simulate form submission
    4. Check that event was emitted
    5. Check value of payload was correct
     */

  it('emits an event with a user from data payload', async () => {
    const wrapper = mount(LoginForm)
    //const input = wrapper.find('[data-testid="name-input"]')
    const input = wrapper.find('input')
    input.setValue('Mark')

    // await wrapper.vm.$nextTick()
    
    wrapper.trigger('submit')

    const formCalls = wrapper.emitted('formSubmit')
    console.log('formsubcalls', formCalls )

    expect( formCalls ).toHaveLength(1)
    
  })

});
