import { Task, CreateTaskInput, UpdateTaskInput } from '@/types/task'

const API_BASE = '/api'

async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }))
    throw new Error(error.error || 'Request failed')
  }

  return response.json()
}

export const taskApi = {
  async getAll(): Promise<Task[]> {
    return fetchJSON<Task[]>(`${API_BASE}/tasks`)
  },

  async getById(id: string): Promise<Task> {
    return fetchJSON<Task>(`${API_BASE}/tasks/${id}`)
  },

  async create(input: CreateTaskInput): Promise<Task> {
    return fetchJSON<Task>(`${API_BASE}/tasks`, {
      method: 'POST',
      body: JSON.stringify(input),
    })
  },

  async update(input: UpdateTaskInput): Promise<Task> {
    return fetchJSON<Task>(`${API_BASE}/tasks/${input.id}`, {
      method: 'PUT',
      body: JSON.stringify(input),
    })
  },

  async delete(id: string): Promise<void> {
    await fetchJSON(`${API_BASE}/tasks/${id}`, {
      method: 'DELETE',
    })
  },
}
