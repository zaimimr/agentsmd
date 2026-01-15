'use client'

import { TaskStatus, TaskPriority } from '@/types/task'

interface TaskFilterProps {
  onFilterChange?: (filters: TaskFilters) => void
}

export interface TaskFilters {
  status?: TaskStatus | 'all'
  priority?: TaskPriority | 'all'
}

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  // TODO: Implement task filtering component
  //
  // Requirements:
  // - Status dropdown: All, To Do, In Progress, Done
  // - Priority dropdown: All, Low, Medium, High
  // - Clear Filters button
  // - Call onFilterChange when filters change
  //
  // Look at components/ui/select.tsx for the Select component
  // Look at components/ui/button.tsx for the Button component
  //
  // Example structure:
  // <div className="flex gap-4">
  //   <Select value={status} onChange={...}>
  //     <option value="all">All Status</option>
  //     <option value="todo">To Do</option>
  //     ...
  //   </Select>
  //   <Button onClick={clearFilters}>Clear Filters</Button>
  // </div>

  return (
    <div className="p-4 border rounded-lg bg-muted/50">
      <p className="text-sm text-muted-foreground">
        TODO: Implement task filtering controls
      </p>
    </div>
  )
}
