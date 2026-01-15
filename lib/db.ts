import { Task, CreateTaskInput, UpdateTaskInput, TaskStatus, TaskPriority } from '@/types/task'
import { generateId } from '@/lib/utils'

// eslint-disable-next-line prefer-const
let tasks: Task[] = [
  {
    id: '1',
    title: 'Complete task validation schema',
    description: 'Create Zod validation schemas for task creation and updates',
    status: 'todo',
    priority: 'high',
    createdAt: new Date('2026-01-10'),
    updatedAt: new Date('2026-01-10'),
  },
  {
    id: '2',
    title: 'Add error handling to API routes',
    description: 'Implement comprehensive try-catch blocks and proper HTTP status codes',
    status: 'todo',
    priority: 'high',
    createdAt: new Date('2026-01-10'),
    updatedAt: new Date('2026-01-10'),
  },
  {
    id: '3',
    title: 'Implement task filtering',
    description: 'Add ability to filter tasks by status and priority',
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date('2026-01-09'),
    updatedAt: new Date('2026-01-11'),
  },
  {
    id: '4',
    title: 'Build task detail page',
    description: 'Create detail view showing all task information',
    status: 'todo',
    priority: 'medium',
    createdAt: new Date('2026-01-09'),
    updatedAt: new Date('2026-01-09'),
  },
  {
    id: '5',
    title: 'Design workshop slides',
    description: 'Create presentation slides for agentic coding workshop',
    status: 'done',
    priority: 'high',
    createdAt: new Date('2026-01-05'),
    updatedAt: new Date('2026-01-08'),
    dueDate: new Date('2026-01-08'),
  },
  {
    id: '6',
    title: 'Write comprehensive tests',
    description: 'Add test coverage for components, API routes, and utilities',
    status: 'todo',
    priority: 'medium',
    createdAt: new Date('2026-01-10'),
    updatedAt: new Date('2026-01-10'),
  },
]

export const db = {
  async getTasks(): Promise<Task[]> {
    return [...tasks].sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
  },

  async getTask(id: string): Promise<Task | null> {
    const task = tasks.find(t => t.id === id)
    return task ? { ...task } : null
  },

  async createTask(input: CreateTaskInput): Promise<Task> {
    const now = new Date()
    const task: Task = {
      id: generateId(),
      ...input,
      createdAt: now,
      updatedAt: now,
    }
    tasks.push(task)
    return { ...task }
  },

  async updateTask(input: UpdateTaskInput): Promise<Task | null> {
    const index = tasks.findIndex(t => t.id === input.id)
    if (index === -1) return null

    const existingTask = tasks[index]
    const updatedTask: Task = {
      ...existingTask,
      ...input,
      id: existingTask.id,
      createdAt: existingTask.createdAt,
      updatedAt: new Date(),
    }
    tasks[index] = updatedTask
    return { ...updatedTask }
  },

  async deleteTask(id: string): Promise<boolean> {
    const index = tasks.findIndex(t => t.id === id)
    if (index === -1) return false
    tasks.splice(index, 1)
    return true
  },

  async getTasksByStatus(status: TaskStatus): Promise<Task[]> {
    return tasks.filter(t => t.status === status)
  },

  async getTasksByPriority(priority: TaskPriority): Promise<Task[]> {
    return tasks.filter(t => t.priority === priority)
  },

  async searchTasks(query: string): Promise<Task[]> {
    const lowerQuery = query.toLowerCase()
    return tasks.filter(
      t =>
        t.title.toLowerCase().includes(lowerQuery) ||
        t.description?.toLowerCase().includes(lowerQuery)
    )
  },
}
