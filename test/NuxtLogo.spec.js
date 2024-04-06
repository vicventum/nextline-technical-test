// import '@testing-library/jest-dom'
// import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', async () => {
    render(NuxtLogo)
    screen.debug()
    const logo = await screen.findByRole('logo')
    expect(logo).toBeInTheDocument()
  })
})
