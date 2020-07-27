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




