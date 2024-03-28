import { getAll } from '@/components/tasks/services/providers/task-axios-provider.js'
import { getTaskList } from '@/components/tasks/services/task-service.js'
// import { utilRandomColor } from '@/utils/util-random-color.js'

export const state = () => ({
  taskList: [],
  isErrorTaskList: false,
})

export const getters = {
  taskList(state) {
    return state.taskList
  },
  isErrorTaskList(state) {
    return state.isErrorTaskList
  },
}

export const actions = {
  async fetchTaskList(context) {
    const provider = getAll
    try {
      const rawTaskList = await getTaskList(provider)
      const taskList = formatTaskList(rawTaskList)
      context.commit('setTaskList', taskList)
    } catch (error) {
      console.error(error)
      context.commit('setIsErrorTaskList', true)
    }
  },
}

export const mutations = {
  setTaskList(state, data) {
    state.taskList = data
  },
  setIsErrorTaskList(state, data) {
    state.isErrorTaskList = data
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
