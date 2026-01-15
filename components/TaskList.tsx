'use client'

import { Task } from '@/types/task'
import { TaskCard } from '@/components/TaskCard'

interface TaskListProps {
  tasks: Task[]
  onUpdate?: (task: Task) => void
  onDelete?: (id: string) => void
}

export function TaskList({ tasks, onUpdate, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No tasks found</p>
        <p className="text-sm text-muted-foreground mt-2">
          Create your first task to get started!
        </p>
      </div>
    )
  }

  // TODO: Add pagination
  // Currently showing all tasks, should implement pagination to show 10 tasks per page
  // Consider adding:
  // - Page state management
  // - Previous/Next buttons
  // - Page number display
  // - Optional: Page size selector

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Showing {tasks.length} task{tasks.length !== 1 ? 's' : ''}
        </p>
        {/* TODO: Add pagination controls here */}
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}
