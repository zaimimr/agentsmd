import { describe, it, expect } from 'vitest'
import { taskStatusSchema, taskPrioritySchema } from '@/lib/validation'

describe('Validation Schemas', () => {
  describe('taskStatusSchema', () => {
    it('should accept valid status values', () => {
      expect(taskStatusSchema.parse('todo')).toBe('todo')
      expect(taskStatusSchema.parse('in-progress')).toBe('in-progress')
      expect(taskStatusSchema.parse('done')).toBe('done')
    })

    it('should reject invalid status values', () => {
      expect(() => taskStatusSchema.parse('invalid')).toThrow()
    })
  })

  describe('taskPrioritySchema', () => {
    it('should accept valid priority values', () => {
      expect(taskPrioritySchema.parse('low')).toBe('low')
      expect(taskPrioritySchema.parse('medium')).toBe('medium')
      expect(taskPrioritySchema.parse('high')).toBe('high')
    })

    it('should reject invalid priority values', () => {
      expect(() => taskPrioritySchema.parse('invalid')).toThrow()
    })
  })

  describe('createTaskSchema', () => {
    // TODO: Add tests for createTaskSchema once implemented
    // - Valid task creation data
    // - Required fields (title, status, priority)
    // - Optional fields (description, dueDate)
    // - Title length validation (1-100 chars)
    // - Invalid data rejection
  })

  describe('updateTaskSchema', () => {
    // TODO: Add tests for updateTaskSchema once implemented
    // - Valid update data
    // - All fields optional except id
    // - Partial updates work correctly
  })
})
