import apiClient from '@/services/api-client'

export async function getAll() {
  const resp = await apiClient.get('/tasks')
  return resp.data
}
