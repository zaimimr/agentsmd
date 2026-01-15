import { z } from 'zod'

// Task status enum
export const taskStatusSchema = z.enum(['todo', 'in-progress', 'done'])

// Task priority enum
export const taskPrioritySchema = z.enum(['low', 'medium', 'high'])

export const createTaskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().optional(),
  status: taskStatusSchema,
  priority: taskPrioritySchema,
  dueDate: z.coerce.date().optional(),
})

export const updateTaskSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1).max(100).optional(),
  description: z.string().optional(),
  status: taskStatusSchema.optional(),
  priority: taskPrioritySchema.optional(),
  dueDate: z.coerce.date().optional(),
})

export type CreateTaskSchema = z.infer<typeof createTaskSchema>
export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>

// Example validation helper
export function validateData<T>(schema: z.ZodSchema<T>, data: unknown) {
  return schema.safeParse(data)
}
