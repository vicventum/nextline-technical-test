import {
  getAll,
  create,
  remove,
  get,
  edit,
} from '@/components/tasks/services/providers/task-axios-provider.js'
import {
  getTaskList,
  createTask,
  deleteTask,
  getTask,
  editTask,
} from '@/components/tasks/services/task-service.js'
import {
  utilSortTasksAlpha,
  utilSortTasksCreatedDate,
} from '@/components/tasks/utils'

export const state = () => ({
  taskList: [],
  task: {
    id: 0,
    title: '',
    isCompleted: false,
    dueDate: '',
    description: '',
    comments: '',
    tags: [],
    token: '',
    createdAt: '',
    updatedAt: '',
  },
  creatingTask: {
    isError: false,
    isLoading: false,
  },
  deletingTask: {
    isError: false,
    isLoading: false,
  },
  editingTask: {
    isError: false,
    isLoading: false,
  },
})

export const getters = {
  taskList(state) {
    return state.taskList
  },
  task(state) {
    return state.task
  },
  creatingTask(state) {
    return state.creatingTask
  },
  deletingTask(state) {
    return state.deletingTask
  },
  editingTask(state) {
    return state.editingTask
  },
}

export const actions = {
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
      context.commit('setCreatingTaskLoading', false)
    }
  },
  async deleteTask(context, taskId) {
    const provider = remove
    try {
      context.commit('setDeletingTaskLoading', true)
      await deleteTask(provider, taskId)
      context.commit('setDeletingTaskLoading', false)
    } catch (error) {
      console.error(error)
      context.commit('setDeletingTaskError', true)
      context.commit('setDeletingTaskLoading', false)
    }
  },
  async editTask(context, taskData) {
    const provider = edit
    try {
      context.commit('setEditingTaskLoading', true)
      await editTask(provider, taskData.taskId, taskData.newData)
      context.commit('setEditingTaskLoading', false)
    } catch (error) {
      console.error(error)
      context.commit('setEditingTaskError', true)
      context.commit('setEditingTaskLoading', false)
    }
  },
}

export const mutations = {
  setTaskList(state, data) {
    state.taskList = data
  },
  setTask(state, data) {
    state.task = data
  },
  setTaskData(state, data) {
    state.task.data = data
  },
  setTaskError(state, data) {
    state.task.isError = data
  },
  setTaskLoading(state, data) {
    state.task.isLoading = data
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

  setEditingTaskError(state, data) {
    state.editingTask.isError = data
  },
  setEditingTaskLoading(state, data) {
    state.editingTask.isLoading = data
  },
}

// --- Encapsula el algoritmo repetitivo de los actions, pero se descartó por ser complejo de leer al abstraer demasiado:

// async function actionHandler({
//   commitFunction,
//   commitLoadingName,
//   commitErrorName,
//   asyncActionFunction,
//   provider,
//   payload,
// }) {
//   commitFunction(commitLoadingName, true)
//   const { data, error } = await errorHandler({
//     asyncActionFunction,
//     provider,
//     payload,
//   })
//   commitFunction(commitLoadingName, false)

//   if (data) return { data, isError: false, error: null }
//   else {
//     commitFunction(commitErrorName, true)
//     return { data: null, isError: true, error }
//   }
// }

// async function asyncActionHandler({ asyncActionFunction, provider, payload = null }) {
//   try {
//     const data = await asyncActionFunction(provider, payload)
//     return { data, error: null }
//   } catch (error) {
//     console.error(error)
//     return { data: null, error }
//   }
// }

// --- Uso:

// await actionHandler({
//   commitFunction: context.commit,
//   commitLoadingName: 'setEditingTaskLoading',
//   commitErrorName: 'setEditingTaskError',
//   asyncActionFunction: editTask,
//   provider,
//   payload: taskId,
// })
