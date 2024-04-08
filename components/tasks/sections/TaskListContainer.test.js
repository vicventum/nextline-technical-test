import Vuetify from 'vuetify'
import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import TaskListContainer from './TaskListContainer.vue'
import * as taskStore from '@/store/task.store.js'

jest.mock('@/components/tasks/services/task-service.js', () => ({
  getTaskList: jest.fn().mockResolvedValue([
    {
      id: 1951,
      title: 'Probando',
      is_completed: 0,
      due_date: '2024-04-06',
    },
    {
      id: 1952,
      title: 'Actualizan',
      is_completed: 0,
      due_date: '2024-04-06',
    },
  ]),
}))

describe('TaskListContainer', () => {
  test('is a Vue instance', async () => {
    render(TaskListContainer, {
      store: {
        modules: {
          'task.store': {
            namespaced: true,
            ...taskStore,
          },
        },
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      vuetify: new Vuetify(),
    })

    await flushPromises()

    screen.debug()
    // const button = await screen.findByRole('button')
    // expect(button).toBeInTheDocument()
  })
})
