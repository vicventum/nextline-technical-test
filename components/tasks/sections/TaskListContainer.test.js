import TaskListContainer from './TaskListContainer.vue'
import {
  customMount as mount,
  flushPromises,
} from '@/test/utils/custom-render.js'

import * as taskStore from '@/store/task.store.js'
import { getTaskList } from '@/components/tasks/services/task-service.js'

jest.mock('@/components/tasks/services/task-service.js', () => ({
  getTaskList: jest.fn(() => []),
}))

afterEach(() => {
  getTaskList.mockReset()
})

describe('When a user lands on page', () => {
  test('should render the jobs', async () => {
    const taskList = [
      {
        id: 1951,
        title: 'Probando',
        is_completed: 0,
        due_date: '2024-04-06',
      },
    ]

    getTaskList.mockResolvedValue(Promise.resolve(taskList))

    const wrapper = mount(TaskListContainer, {
      store: { moduleName: 'task.store', store: taskStore },
    })
    // ? Ejecuta el hook `fetch` de Nuxt
    await TaskListContainer.mixins[0].fetch.call(wrapper.vm)

    const task = wrapper.find('[data-testid="task"]')
    // console.log(task.html())

    expect(task.exists()).toBe(true)
    expect(task.text()).toMatch(taskList[0].title)

    // screen.debug()
    // expect(task).toBeInTheDocument()
    // expect(task).toHaveTextContent(/Probando/i)
  })

  describe('and there are no task to show', () => {
    it('should display a message that no task have been found', async () => {
      const taskList = []

      getTaskList.mockResolvedValue(Promise.resolve(taskList))

      const wrapper = mount(TaskListContainer, {
        store: { moduleName: 'task.store', store: taskStore },
      })
      // ? Ejecuta el hook `fetch` de Nuxt
      await TaskListContainer.mixins[0].fetch.call(wrapper.vm)

      const message = wrapper.find('[data-testid="no-tasks-message"]')
      // console.log(message.html())

      expect(message.exists()).toBe(true)
      expect(message.text()).toMatch(/no tasks to display/i)
    })
  })

  describe('and an error has occurred', () => {
		it('should show an error message', async () => {
      getTaskList.mockResolvedValue(Promise.reject(new Error('error')))

      const wrapper = mount(TaskListContainer, {
        store: { moduleName: 'task.store', store: taskStore },
      })
      // ? Ejecuta el hook `fetch` de Nuxt
      await TaskListContainer.mixins[0].fetch.call(wrapper.vm)

      const message = wrapper.find('[data-testid="error-message"]')
      console.log(message.html())

      expect(message.exists()).toBe(true)
      expect(message.text()).toMatch(/an error has occurred/i)
		})
	})
})
