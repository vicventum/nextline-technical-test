let taskList = []
let task = {}

export async function getTaskList(getAll) {
  taskList = await getAll()
  console.log('🚀 ~ getTaskList ~ getAll():',taskList)

  return taskList
}
export async function getTask(get, taskId) {
  task = await get(taskId)
  return task
}

export async function createTask(create, task) {
  await create(task)
}

export async function deleteTask(remove, taskId) {
  await remove(taskId)
}
export async function editTask(edit, taskId, newData) {
  await edit(taskId, newData)
}
