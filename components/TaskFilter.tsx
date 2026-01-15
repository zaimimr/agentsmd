'use client'

import { useState } from 'react'
import { TaskStatus, TaskPriority } from '@/types/task'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

interface TaskFilterProps {
  onFilterChange?: (filters: TaskFilters) => void
}

export interface TaskFilters {
  status?: TaskStatus | 'all'
  priority?: TaskPriority | 'all'
}

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | 'all'>('all')
  const [priority, setPriority] = useState<TaskPriority | 'all'>('all')

  function handleStatusChange(newStatus: TaskStatus | 'all') {
    setStatus(newStatus)
    onFilterChange?.({ status: newStatus, priority })
  }

  function handlePriorityChange(newPriority: TaskPriority | 'all') {
    setPriority(newPriority)
    onFilterChange?.({ status, priority: newPriority })
  }

  function clearFilters() {
    setStatus('all')
    setPriority('all')
    onFilterChange?.({ status: 'all', priority: 'all' })
  }

  const hasActiveFilters = status !== 'all' || priority !== 'all'

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 border rounded-lg bg-muted/50">
      <div className="flex items-center gap-2">
        <label htmlFor="status-filter" className="text-sm font-medium">
          Status
        </label>
        <Select
          id="status-filter"
          value={status}
          onChange={(e) => handleStatusChange(e.target.value as TaskStatus | 'all')}
        >
          <option value="all">All</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="priority-filter" className="text-sm font-medium">
          Priority
        </label>
        <Select
          id="priority-filter"
          value={priority}
          onChange={(e) => handlePriorityChange(e.target.value as TaskPriority | 'all')}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" size="sm" onClick={clearFilters}>
          Clear Filters
        </Button>
      )}
    </div>
  )
}
