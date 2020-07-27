import MessageContainer from "@/components/MessageContainer";
// import MessageDisplay from "@/components/MessageDisplay";
import { mount } from '@vue/test-utils'

describe( 'MessageContainer tests', () => {
    it('should wrap the MessageDisplay component', function () {
        const wrapper = mount( MessageContainer, {
            stubs: {
                MessageDisplay: '<p v-else-if="message.text" data-testid="message">Hello from the db!</p>'
            }
        })
        const msg = wrapper.find('[data-testid="message"]').element.textContent
        expect( msg ).toBe('Hello from the db!')
    });


})
