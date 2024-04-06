import { render, screen } from '@testing-library/vue'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {

  test('is a Vue instance', async () => {
    render(NuxtLogo)
    screen.debug()
    const button = await screen.findByRole('button')
    expect(button).toBeInTheDocument()
  })
})

// import { createLocalVue, mount } from '@vue/test-utils'
// import Vuetify from 'vuetify'
// import NuxtLogo from '@/components/NuxtLogo.vue'

// describe('Index Switch', () => {
//   const localVue = createLocalVue()
//   let vuetify

//   beforeEach(() => {
//     vuetify = new Vuetify()
//   })

//   it('should have index switch button', () => {
//     const wrapper = mount(NuxtLogo, { localVue, vuetify })
//     console.log("🚀 ~ it ~ wrapper:", wrapper.html())
//     const myButton = wrapper.find('.v-btn')
//     expect(myButton.text()).toBe('text')
//   })
// })
