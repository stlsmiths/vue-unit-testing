# NOTES Vue Mastery - Unit Testing class

Video https://www.vuemastery.com/courses/unit-testing/writing-a-unit-test-with-jest

#### Lesson 2 -  Writing a unit test with Jest

```
vue create vue-unit-testing
npm run test:unit
```
Runs tests in /tests/unit folder

wrapper.find('xxx').isVisible() 

wrap it block async () ... await wrapper.vm.$nextTick() before checking changes.

Getting jest console errors ... "isVisible to be deprecated soon" 

#### Lesson 3 - Testing props and user interaction

can use `wrapper.trigger('click')` to simulate button push.
Still need `async ... await wrapper.vm.$nextTick()` after the push

Can provide initial props, `const wrapper = mount(ComponentName,{ propsData: { p1:0, p2:0  }  } )`

could also use wrapper.setData() or wrapper.vm.$props ... but this is better

#### Lesson 4 - Testing emitted events

Find the input textbox, then `input.setValue('string')`

I'm getting a fail, `formSubmittedCall` as undefined
Tried running $nextTick() and @submit.prevent.native to no avail

ISSUE:  For my template I had the <form> inside a <div>, which was causing issues

FIX:  I extract the "form" element using `wrapper.find('form')` and then trigger the
submit off that ... it works

#### Lesson 5 - Testing API calls 

Created a simple db.json and json-server.
Created a service to call the api.
Created MessageDisplay component to make call.

Mocking of api call ...
jest.mock()

getMessage.mockResolvedValueOnce( obj )

await flushPromises()

I had an ERROR, and these tests actually helped me find it!
(I was setting `this.message` on error in comp instead of `this.error`)

#### Lesson 6 - Stubs for child components

A "stub" is just a canned placeholder for a child component.

Advantages of "stub":
 1. Helps isolate testing 
 2. Test one thing at a time
 3. Can pinpoint part hart of code is broken

Disadvantages of "stub":
 1. Maintenance costs ... added work
 2. Decreasing code coverage
 3. Reduced confidence in code

Can use shallowMount() ... not always supported, like
in "Vue Testing Library"

FINAL code https://github.com/Code-Pop/Unit-Testing/tree/Lesson6_FINAL





