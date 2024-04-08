import { render, screen } from '@testing-library/vue'
import { mount, config } from '@vue/test-utils'

import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    // const wrapper = mount(NuxtLogo)
    // console.log('🚀 ~ test ~ wrapper:', wrapper.vm)
    const wrapper = render(NuxtLogo)
    console.log('🚀 ~ test ~ wrapper:', wrapper.component)

    // // screen.debug()
    // const button = await screen.findByRole('button')
    // expect(button).toBeInTheDocument()
  })
})
