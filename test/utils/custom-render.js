import Vuetify from 'vuetify'
// import { render, screen } from '@testing-library/vue'
import Vuex from 'vuex'
import {
  createLocalVue,
  mount as originalMount,
  RouterLinkStub,
} from '@vue/test-utils'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

export function customMount(component, { store: { moduleName, store } }) {
  return originalMount(component, {
    store: new Vuex.Store({
      modules: {
        [moduleName]: {
          namespaced: true,
          ...store,
        },
      },
    }),
    localVue,
    stubs: {
      RouterLink: RouterLinkStub,
    },
    vuetify: new Vuetify(),
  })
}

export { flushPromises }
export * from '@vue/test-utils'
