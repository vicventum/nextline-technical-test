import TaskListContainer from './TaskListContainer.vue'
import * as taskStore from '@/store/task.store.js'
import {
  customMount as mount,
  flushPromises,
} from '@/test/utils/custom-render.js'

jest.mock('@/components/tasks/services/task-service.js', () => ({
  getTaskList: jest.fn(() =>
    Promise.resolve([
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
    ])
  ),
}))

describe('When a user lands on page', () => {
  test('should render the jobs', async () => {
    const wrapper = mount(TaskListContainer, {
      store: { moduleName: 'task.store', store: taskStore },
    })

    // ? Ejecuta el hook `fetch` de Nuxt
    await TaskListContainer.mixins[0].fetch.call(wrapper.vm)

    console.log(wrapper.html())
    // screen.debug()
    // const button = await screen.findByRole('button')
    // expect(button).toBeInTheDocument()
  })
})
