import axiosClient from '@/services/api-client'

export async function getAll() {
  const resp = await axiosClient.get('/tasks')
  return resp.data
}

export async function create(task) {
  await axiosClient.post('/tasks', task)
}