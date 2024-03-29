import axiosClient from '@/services/api-client'

export async function getAll() {
  const resp = await axiosClient.get('/tasks')
  return resp.data
}
export async function get(taskId) {
  const resp = await axiosClient.get(`/tasks/${taskId}`)
  return resp.data
}

export async function create(task) {
  await axiosClient.post('/tasks', task)
}
export async function remove(taskId) {
  await axiosClient.delete(`/tasks/${taskId}`)
}
export async function edit(taskId, newData) {
  await axiosClient.put(`/tasks/${taskId}`, newData)
}
