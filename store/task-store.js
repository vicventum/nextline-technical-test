import {
  getAll,
  create,
  remove,
} from '@/components/tasks/services/providers/task-axios-provider.js'
import {
  getTaskList,
  createTask,
  deleteTask,
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
  deletingTask: {
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
  async createTask(context, taskId) {
    const provider = create
    try {
      context.commit('setCreatingTaskLoading', true)
      await createTask(provider, taskId)
      context.commit('setCreatingTaskLoading', false)
      // await context.dispatch('fetchTaskList')
    } catch (error) {
      console.error(error)
      context.commit('setCreatingTaskError', true)
    }
  },
  async deleteTask(context, task) {
    const provider = remove
    try {
      context.commit('setDeletingTaskLoading', true)
      await deleteTask(provider, task)
      context.commit('setDeletingTaskLoading', false)
    } catch (error) {
      console.error(error)
      context.commit('setDeletingTaskLoading', true)
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
  setDeletingTaskError(state, data) {
    state.deletingTask.isError = data
  },
  setDeletingTaskLoading(state, data) {
    state.deletingTask.isLoading = data
  },
}

function formatTaskList(rawTaskList) {
  return rawTaskList.map((task) => ({
    id: task.id,
    title: task.title,
    isCompleted: !!task.is_completed,
    dueDate: task.due_date,
    // description: task.description,
    // tags: task.tags?.map(tag => ({text: tag, color: utilRandomColor()})),
  }))
}
