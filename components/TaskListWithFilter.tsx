'use client'

import { useState, useMemo } from 'react'
import { Task } from '@/types/task'
import { TaskFilter, TaskFilters } from '@/components/TaskFilter'
import { TaskList } from '@/components/TaskList'

interface TaskListWithFilterProps {
  tasks: Task[]
  onUpdate?: (task: Task) => void
  onDelete?: (id: string) => void
}

export function TaskListWithFilter({ tasks, onUpdate, onDelete }: TaskListWithFilterProps) {
  const [filters, setFilters] = useState<TaskFilters>({
    status: 'all',
    priority: 'all',
  })

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusMatch = filters.status === 'all' || task.status === filters.status
      const priorityMatch = filters.priority === 'all' || task.priority === filters.priority
      return statusMatch && priorityMatch
    })
  }, [tasks, filters])

  return (
    <div className="space-y-4">
      <TaskFilter onFilterChange={setFilters} />
      <TaskList tasks={filteredTasks} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}
