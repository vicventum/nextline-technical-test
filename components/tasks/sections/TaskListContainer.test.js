import VueToastification from 'vue-toastification/nuxt'

import TaskListContainer from './TaskListContainer.vue'
import {
  customMount as mount,
  flushPromises,
} from '@/test/utils/custom-render.js'
import * as taskStore from '@/store/task.store.js'
import {
  getTaskList,
  deleteTask,
} from '@/components/tasks/services/task-service.js'

// jest.mock('vue-toastification/nuxt')
jest.mock('@/components/tasks/services/task-service.js', () => ({
  getTaskList: jest.fn(() => []),
  deleteTask: jest.fn(() => []),
}))

afterEach(() => {
  getTaskList.mockReset()
  deleteTask.mockReset()
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

    const task = wrapper.find(`[data-testid="task-${taskList[0].id}"]`)
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
      // console.log(message.html())

      expect(message.exists()).toBe(true)
      expect(message.text()).toMatch(/an error has occurred/i)
    })
  })
})

describe('When there are tasks to show', () => {
  describe('and the user presses the delete a task button', () => {
    test('should appear a notification that the task has been deleted', async () => {
      const taskList = [
        {
          id: 1951,
          title: 'Probando',
          is_completed: 0,
          due_date: '2024-04-06',
        },
      ]

      getTaskList.mockResolvedValue(taskList)
      window.confirm = jest.fn(() => true)
      const toastMock = jest.fn()

      const wrapper = mount(TaskListContainer, {
        store: { moduleName: 'task.store', store: taskStore },
        mocks: {
          $toast: {
            success: toastMock,
          },
        },
      })
      // ? Ejecuta el hook `fetch` de Nuxt
      await TaskListContainer.mixins[0].fetch.call(wrapper.vm)

      const buttonDelete = wrapper.find('[data-testid="button-delete"]')
      // console.log(buttonDelete.html())
      await buttonDelete.trigger('click')

      expect(toastMock).toHaveBeenCalled()
    })
    test('should disappear the deleted task ', async () => {
      const taskList = [
        {
          id: 1951,
          title: 'Probando 2',
          is_completed: 0,
          due_date: '2024-04-06',
        },
      ]

      getTaskList.mockResolvedValue(taskList)
      window.confirm = jest.fn(() => true)
      const toastMock = jest.fn()

      const wrapper = mount(TaskListContainer, {
        store: { moduleName: 'task.store', store: taskStore },
        mocks: {
          $toast: {
            success: toastMock,
          },
        },
      })
      // ? Ejecuta el hook `fetch` de Nuxt
      await TaskListContainer.mixins[0].fetch.call(wrapper.vm)

      const buttonDelete = wrapper.find('[data-testid="button-delete"]')
      // console.log(buttonDelete.html())
      const taskListEmpty = []
      getTaskList.mockResolvedValue(taskListEmpty)
      await buttonDelete.trigger('click')

      await flushPromises()

      const task = await wrapper.find(`[data-testid="task-${taskList[0].id}"]`)

      expect(task.exists()).toBe(false)
    })
  })
})
