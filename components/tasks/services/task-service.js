let taskList = []

export async function getTaskList(getAll) {
  taskList = await getAll()

  return taskList
}

export async function createTask(create, task) {
  await create(task)
}

export async function deleteTask(remove, taskId) {
  await remove(taskId)
}
