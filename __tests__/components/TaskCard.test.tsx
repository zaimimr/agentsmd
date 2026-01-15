import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TaskCard } from '@/components/TaskCard'
import { Task } from '@/types/task'

const mockTask: Task = {
  id: '1',
  title: 'Test Task',
  description: 'This is a test task description',
  status: 'todo',
  priority: 'high',
  createdAt: new Date('2026-01-10'),
  updatedAt: new Date('2026-01-10'),
}

describe('TaskCard', () => {
  describe('rendering', () => {
    it('should display task title and description', () => {
      render(<TaskCard task={mockTask} />)

      expect(screen.getByText('Test Task')).toBeInTheDocument()
      expect(screen.getByText('This is a test task description')).toBeInTheDocument()
    })

    it('should display status badge', () => {
      render(<TaskCard task={mockTask} />)

      expect(screen.getByText('todo')).toBeInTheDocument()
    })

    it('should display priority badge', () => {
      render(<TaskCard task={mockTask} />)

      expect(screen.getByText('high priority')).toBeInTheDocument()
    })

    it('should show View button', () => {
      render(<TaskCard task={mockTask} />)

      const viewButton = screen.getByRole('link', { name: /view/i })
      expect(viewButton).toBeInTheDocument()
      expect(viewButton).toHaveAttribute('href', '/tasks/1')
    })

    it('should not show Delete button when onDelete is not provided', () => {
      render(<TaskCard task={mockTask} />)

      expect(screen.queryByRole('button', { name: /delete/i })).not.toBeInTheDocument()
    })

    it('should show Delete button when onDelete is provided', () => {
      const onDelete = vi.fn()
      render(<TaskCard task={mockTask} onDelete={onDelete} />)

      expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    })
  })

  describe('status badge variants', () => {
    it('should show correct variant for todo status', () => {
      const todoTask = { ...mockTask, status: 'todo' as const }
      render(<TaskCard task={todoTask} />)

      const badge = screen.getByText('todo')
      expect(badge).toHaveClass('bg-secondary')
    })

    it('should show correct variant for in-progress status', () => {
      const inProgressTask = { ...mockTask, status: 'in-progress' as const }
      render(<TaskCard task={inProgressTask} />)

      const badge = screen.getByText('in progress')
      expect(badge).toHaveClass('bg-yellow-100')
    })

    it('should show correct variant for done status', () => {
      const doneTask = { ...mockTask, status: 'done' as const }
      render(<TaskCard task={doneTask} />)

      const badge = screen.getByText('done')
      expect(badge).toHaveClass('bg-green-100')
    })
  })

  describe('priority badge variants', () => {
    it('should show correct variant for low priority', () => {
      const lowPriorityTask = { ...mockTask, priority: 'low' as const }
      render(<TaskCard task={lowPriorityTask} />)

      const badge = screen.getByText('low priority')
      expect(badge).toHaveClass('bg-secondary')
    })

    it('should show correct variant for medium priority', () => {
      const mediumPriorityTask = { ...mockTask, priority: 'medium' as const }
      render(<TaskCard task={mediumPriorityTask} />)

      const badge = screen.getByText('medium priority')
      expect(badge).toHaveClass('bg-primary')
    })

    it('should show correct variant for high priority', () => {
      const highPriorityTask = { ...mockTask, priority: 'high' as const }
      render(<TaskCard task={highPriorityTask} />)

      const badge = screen.getByText('high priority')
      expect(badge).toHaveClass('bg-destructive')
    })
  })

  describe('interactions', () => {
    it('should call onDelete when Delete button is clicked', () => {
      const onDelete = vi.fn()
      render(<TaskCard task={mockTask} onDelete={onDelete} />)

      const deleteButton = screen.getByRole('button', { name: /delete/i })
      fireEvent.click(deleteButton)

      expect(onDelete).toHaveBeenCalledWith('1')
    })

    it('should not call onDelete when View button is clicked', () => {
      const onDelete = vi.fn()
      render(<TaskCard task={mockTask} onDelete={onDelete} />)

      const viewButton = screen.getByRole('link', { name: /view/i })
      fireEvent.click(viewButton)

      expect(onDelete).not.toHaveBeenCalled()
    })
  })

  describe('edge cases', () => {
    it('should handle task without description', () => {
      const taskWithoutDesc = { ...mockTask, description: undefined }
      render(<TaskCard task={taskWithoutDesc} />)

      expect(screen.getByText('Test Task')).toBeInTheDocument()
      expect(screen.queryByText('This is a test task description')).not.toBeInTheDocument()
    })

    it('should truncate long descriptions', () => {
      const longDescription = 'A'.repeat(200)
      const taskWithLongDesc = { ...mockTask, description: longDescription }
      const { container } = render(<TaskCard task={taskWithLongDesc} />)

      const descriptionElement = container.querySelector('.line-clamp-2')
      expect(descriptionElement).toBeInTheDocument()
    })
  })
})
