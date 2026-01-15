import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskFilter } from '@/components/TaskFilter'

describe('TaskFilter', () => {
  describe('rendering', () => {
    it('should render status dropdown', () => {
      render(<TaskFilter />)

      expect(screen.getByLabelText(/status/i)).toBeInTheDocument()
    })

    it('should render priority dropdown', () => {
      render(<TaskFilter />)

      expect(screen.getByLabelText(/priority/i)).toBeInTheDocument()
    })

    it('should render all status options', () => {
      render(<TaskFilter />)

      const statusSelect = screen.getByLabelText(/status/i)
      expect(statusSelect).toContainHTML('<option value="all">All</option>')
      expect(statusSelect).toContainHTML('<option value="todo">To Do</option>')
      expect(statusSelect).toContainHTML('<option value="in-progress">In Progress</option>')
      expect(statusSelect).toContainHTML('<option value="done">Done</option>')
    })

    it('should render all priority options', () => {
      render(<TaskFilter />)

      const prioritySelect = screen.getByLabelText(/priority/i)
      expect(prioritySelect).toContainHTML('<option value="all">All</option>')
      expect(prioritySelect).toContainHTML('<option value="low">Low</option>')
      expect(prioritySelect).toContainHTML('<option value="medium">Medium</option>')
      expect(prioritySelect).toContainHTML('<option value="high">High</option>')
    })

    it('should not show Clear Filters button when no filters active', () => {
      render(<TaskFilter />)

      expect(screen.queryByRole('button', { name: /clear filters/i })).not.toBeInTheDocument()
    })
  })

  describe('default values', () => {
    it('should have "all" as default status', () => {
      render(<TaskFilter />)

      expect(screen.getByLabelText(/status/i)).toHaveValue('all')
    })

    it('should have "all" as default priority', () => {
      render(<TaskFilter />)

      expect(screen.getByLabelText(/priority/i)).toHaveValue('all')
    })
  })

  describe('filter changes', () => {
    it('should call onFilterChange when status changes', async () => {
      const user = userEvent.setup()
      const onFilterChange = vi.fn()
      render(<TaskFilter onFilterChange={onFilterChange} />)

      const statusSelect = screen.getByLabelText(/status/i)
      await user.selectOptions(statusSelect, 'todo')

      expect(onFilterChange).toHaveBeenCalledWith({
        status: 'todo',
        priority: 'all',
      })
    })

    it('should call onFilterChange when priority changes', async () => {
      const user = userEvent.setup()
      const onFilterChange = vi.fn()
      render(<TaskFilter onFilterChange={onFilterChange} />)

      const prioritySelect = screen.getByLabelText(/priority/i)
      await user.selectOptions(prioritySelect, 'high')

      expect(onFilterChange).toHaveBeenCalledWith({
        status: 'all',
        priority: 'high',
      })
    })

    it('should update status select value', async () => {
      const user = userEvent.setup()
      render(<TaskFilter />)

      const statusSelect = screen.getByLabelText(/status/i)
      await user.selectOptions(statusSelect, 'in-progress')

      expect(statusSelect).toHaveValue('in-progress')
    })

    it('should update priority select value', async () => {
      const user = userEvent.setup()
      render(<TaskFilter />)

      const prioritySelect = screen.getByLabelText(/priority/i)
      await user.selectOptions(prioritySelect, 'medium')

      expect(prioritySelect).toHaveValue('medium')
    })
  })

  describe('Clear Filters button', () => {
    it('should show Clear Filters button when status filter is active', async () => {
      const user = userEvent.setup()
      render(<TaskFilter />)

      const statusSelect = screen.getByLabelText(/status/i)
      await user.selectOptions(statusSelect, 'todo')

      expect(screen.getByRole('button', { name: /clear filters/i })).toBeInTheDocument()
    })

    it('should show Clear Filters button when priority filter is active', async () => {
      const user = userEvent.setup()
      render(<TaskFilter />)

      const prioritySelect = screen.getByLabelText(/priority/i)
      await user.selectOptions(prioritySelect, 'high')

      expect(screen.getByRole('button', { name: /clear filters/i })).toBeInTheDocument()
    })

    it('should reset filters when Clear Filters clicked', async () => {
      const user = userEvent.setup()
      const onFilterChange = vi.fn()
      render(<TaskFilter onFilterChange={onFilterChange} />)

      const statusSelect = screen.getByLabelText(/status/i)
      const prioritySelect = screen.getByLabelText(/priority/i)
      await user.selectOptions(statusSelect, 'todo')
      await user.selectOptions(prioritySelect, 'high')

      const clearButton = screen.getByRole('button', { name: /clear filters/i })
      await user.click(clearButton)

      expect(statusSelect).toHaveValue('all')
      expect(prioritySelect).toHaveValue('all')
    })

    it('should call onFilterChange with all values when Clear Filters clicked', async () => {
      const user = userEvent.setup()
      const onFilterChange = vi.fn()
      render(<TaskFilter onFilterChange={onFilterChange} />)

      const statusSelect = screen.getByLabelText(/status/i)
      await user.selectOptions(statusSelect, 'todo')

      onFilterChange.mockClear()

      const clearButton = screen.getByRole('button', { name: /clear filters/i })
      await user.click(clearButton)

      expect(onFilterChange).toHaveBeenCalledWith({
        status: 'all',
        priority: 'all',
      })
    })

    it('should hide Clear Filters button after clearing', async () => {
      const user = userEvent.setup()
      render(<TaskFilter />)

      const statusSelect = screen.getByLabelText(/status/i)
      await user.selectOptions(statusSelect, 'todo')

      const clearButton = screen.getByRole('button', { name: /clear filters/i })
      await user.click(clearButton)

      expect(screen.queryByRole('button', { name: /clear filters/i })).not.toBeInTheDocument()
    })
  })

  describe('combined filters', () => {
    it('should maintain both filters when changed independently', async () => {
      const user = userEvent.setup()
      const onFilterChange = vi.fn()
      render(<TaskFilter onFilterChange={onFilterChange} />)

      const statusSelect = screen.getByLabelText(/status/i)
      const prioritySelect = screen.getByLabelText(/priority/i)

      await user.selectOptions(statusSelect, 'done')
      await user.selectOptions(prioritySelect, 'low')

      expect(onFilterChange).toHaveBeenLastCalledWith({
        status: 'done',
        priority: 'low',
      })
    })
  })

  describe('accessibility', () => {
    it('should have accessible labels for dropdowns', () => {
      render(<TaskFilter />)

      expect(screen.getByLabelText(/status/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/priority/i)).toBeInTheDocument()
    })

    it('should have proper IDs linking labels to inputs', () => {
      render(<TaskFilter />)

      const statusSelect = screen.getByLabelText(/status/i)
      const prioritySelect = screen.getByLabelText(/priority/i)

      expect(statusSelect).toHaveAttribute('id', 'status-filter')
      expect(prioritySelect).toHaveAttribute('id', 'priority-filter')
    })
  })
})
