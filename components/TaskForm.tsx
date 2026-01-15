'use client'

import { useState, FormEvent } from 'react'
import { Task, TaskStatus, TaskPriority } from '@/types/task'
import { createTaskSchema, updateTaskSchema } from '@/lib/validation'
import { taskApi } from '@/lib/api-client'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

interface TaskFormProps {
  initialValues?: Partial<Task>
  onSuccess?: (task: Task) => void
  onCancel?: () => void
}

interface FormErrors {
  title?: string
  description?: string
  status?: string
  priority?: string
  dueDate?: string
  form?: string
}

export function TaskForm({ initialValues, onSuccess, onCancel }: TaskFormProps) {
  const isEditing = Boolean(initialValues?.id)

  const [title, setTitle] = useState(initialValues?.title ?? '')
  const [description, setDescription] = useState(initialValues?.description ?? '')
  const [status, setStatus] = useState<TaskStatus>(initialValues?.status ?? 'todo')
  const [priority, setPriority] = useState<TaskPriority>(initialValues?.priority ?? 'medium')
  const [dueDate, setDueDate] = useState(
    initialValues?.dueDate ? new Date(initialValues.dueDate).toISOString().split('T')[0] : ''
  )

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErrors({})

    const formData = {
      title,
      description: description || undefined,
      status,
      priority,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    }

    const schema = isEditing ? updateTaskSchema : createTaskSchema
    const dataToValidate = isEditing ? { ...formData, id: initialValues!.id } : formData

    const result = schema.safeParse(dataToValidate)

    if (!result.success) {
      const fieldErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormErrors
        fieldErrors[field] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const task = isEditing
        ? await taskApi.update({ ...formData, id: initialValues!.id! })
        : await taskApi.create(formData)

      onSuccess?.(task)
    } catch (error) {
      setErrors({ form: error instanceof Error ? error.message : 'Failed to save task' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title <span className="text-destructive">*</span>
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'title-error' : undefined}
        />
        {errors.title && (
          <p id="title-error" className="text-destructive text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description (optional)"
          rows={3}
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? 'description-error' : undefined}
        />
        {errors.description && (
          <p id="description-error" className="text-destructive text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">
            Status <span className="text-destructive">*</span>
          </label>
          <Select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            aria-invalid={Boolean(errors.status)}
            aria-describedby={errors.status ? 'status-error' : undefined}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </Select>
          {errors.status && (
            <p id="status-error" className="text-destructive text-sm mt-1">{errors.status}</p>
          )}
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium mb-1">
            Priority <span className="text-destructive">*</span>
          </label>
          <Select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as TaskPriority)}
            aria-invalid={Boolean(errors.priority)}
            aria-describedby={errors.priority ? 'priority-error' : undefined}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
          {errors.priority && (
            <p id="priority-error" className="text-destructive text-sm mt-1">{errors.priority}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium mb-1">
          Due Date
        </label>
        <Input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-invalid={Boolean(errors.dueDate)}
          aria-describedby={errors.dueDate ? 'dueDate-error' : undefined}
        />
        {errors.dueDate && (
          <p id="dueDate-error" className="text-destructive text-sm mt-1">{errors.dueDate}</p>
        )}
      </div>

      {errors.form && (
        <p className="text-destructive text-sm">{errors.form}</p>
      )}

      <div className="flex gap-2 pt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update Task' : 'Create Task')}
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}
