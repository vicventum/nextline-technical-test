let taskList = []

export async function getTaskList(getAll) {
  taskList = await getAll()

  return taskList
}
