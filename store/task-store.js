import {
  getAll,
  create,
} from '@/components/tasks/services/providers/task-axios-provider.js'
import {
  getTaskList,
  createTask,
} from '@/components/tasks/services/task-service.js'
// import { utilRandomColor } from '@/utils/util-random-color.js'

export const state = () => ({
  taskList: {
    data: [],
    isError: false,
    isLoading: false,
  },
  creatingTask: {
    isError: false,
    isLoading: false,
  },
})

export const getters = {
  taskList(state) {
    return state.taskList
  },
  creatingTask(state) {
    return state.creatingTask
  },
}

export const actions = {
  async fetchTaskList(context) {
    const provider = getAll
    try {
      context.commit('setTaskListLoading', true)
      const rawTaskList = await getTaskList(provider)
      context.commit('setTaskListLoading', false)

      const taskList = formatTaskList(rawTaskList)
      context.commit('setTaskListData', taskList)
    } catch (error) {
      console.error(error)
      context.commit('setTaskListError', true)
    }
  },
  async createTask(context, task) {
    const provider = create
    try {
      context.commit('setCreatingTaskLoading', true)
      await createTask(provider, task)
      context.commit('setCreatingTaskLoading', false)
      // await context.dispatch('fetchTaskList')
    } catch (error) {
      console.error(error)
    }
  },
}

export const mutations = {
  setTaskListData(state, data) {
    state.taskList.data = data
  },
  setTaskListError(state, data) {
    state.taskList.isError = data
  },
  setTaskListLoading(state, data) {
    state.taskList.isLoading = data
  },
  setCreatingTaskError(state, data) {
    state.creatingTask.isError = data
  },
  setCreatingTaskLoading(state, data) {
    state.creatingTask.isLoading = data
  },
}

function formatTaskList(rawTaskList) {
  return rawTaskList.map((task) => ({
    title: task.title,
    isCompleted: !!task.is_completed,
    dueDate: task.due_date,
    // description: task.description,
    // tags: task.tags?.map(tag => ({text: tag, color: utilRandomColor()})),
  }))
}
