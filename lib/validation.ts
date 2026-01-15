import { z } from 'zod'

// Task status enum
export const taskStatusSchema = z.enum(['todo', 'in-progress', 'done'])

// Task priority enum
export const taskPrioritySchema = z.enum(['low', 'medium', 'high'])

// TODO: Create task validation schema
// This should include: title (1-100 chars), description (optional),
// status, priority, and optional dueDate
//
// export const createTaskSchema = z.object({
//   title: z.string().min(1).max(100),
//   description: z.string().optional(),
//   status: taskStatusSchema,
//   priority: taskPrioritySchema,
//   dueDate: z.date().optional(),
// })

// TODO: Create update task schema
// All fields should be optional except id
//
// export const updateTaskSchema = z.object({
//   id: z.string(),
//   title: z.string().min(1).max(100).optional(),
//   description: z.string().optional(),
//   status: taskStatusSchema.optional(),
//   priority: taskPrioritySchema.optional(),
//   dueDate: z.date().optional(),
// })

// Example validation helper
export function validateData<T>(schema: z.ZodSchema<T>, data: unknown) {
  return schema.safeParse(data)
}
