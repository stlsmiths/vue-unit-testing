import MessageDisplay from '@/components/MessageDisplay.vue';
import { mount } from '@vue/test-utils'
import flushPromises from "flush-promises"
import {getMessage} from "@/services/axios"

jest.mock('@/services/axios')

beforeEach( () => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('calls getmessage and displays the message', async () => {
    const mockMessage = 'Hello from the db!!'
    getMessage.mockResolvedValueOnce({ "text" : mockMessage })
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect( getMessage ).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message"]')

    console.log('message=', message.element.textContent)
    expect( message.element.textContent ).toBe( mockMessage )
  })

  it('displays error message when api call fails', async () => {
    const mockError = 'Oopps, something went wrong!'
    getMessage.mockRejectedValue(mockError)
    const wrapper = mount(MessageDisplay)
    await flushPromises()
    expect( getMessage ).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message-error"]')

    console.log('message-error=', message.element.textContent)
    expect( message.element.textContent ).toBe( mockError )

  })

})
