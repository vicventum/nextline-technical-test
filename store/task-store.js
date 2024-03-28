import { getAll } from '@/components/tasks/services/providers/task-axios-provider.js'
import { getTaskList } from '@/components/tasks/services/task-service.js'

export const state = () => ({
  taskList: [],
})

export const getters = {
  taskList(state) {
    return state.taskList
  },
}

export const actions = {
  async fetchTaskList(context) {
    const provider = getAll
    const taskList = await getTaskList(provider)

    context.commit('setTaskList', taskList)
  },
}

export const mutations = {
  setTaskList(state, data) {
    state.taskList = data
  },
}
