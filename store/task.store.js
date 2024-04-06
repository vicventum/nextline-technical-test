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
})

export const getters = {
  taskList(state) {
    return state.taskList
  },
  task(state) {
    return state.task
  },
}

export const mutations = {
  setTaskList(state, data) {
    state.taskList = data
  },
  setTask(state, data) {
    state.task = data
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
