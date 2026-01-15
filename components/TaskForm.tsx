'use client'

import { Task, CreateTaskInput } from '@/types/task'

interface TaskFormProps {
  initialValues?: Partial<Task>
  onSuccess?: (task: Task) => void
  onCancel?: () => void
}

export function TaskForm({ initialValues, onSuccess, onCancel }: TaskFormProps) {
  // TODO: Implement task form component
  //
  // Requirements:
  // - Title input (required, 1-100 characters)
  // - Description textarea (optional)
  // - Status select (todo, in-progress, done)
  // - Priority select (low, medium, high)
  // - Due date input (optional)
  // - Submit and Cancel buttons
  //
  // Implementation steps:
  // 1. Add "use client" directive (already done)
  // 2. Use useState for form state
  // 3. Validate with Zod schema from lib/validation.ts
  // 4. Show validation errors inline
  // 5. Call taskApi.create() or taskApi.update() from lib/api-client.ts
  // 6. Handle loading state
  // 7. Call onSuccess with created/updated task
  //
  // Look at these files for reference:
  // - components/ui/input.tsx - Input component
  // - components/ui/select.tsx - Select component
  // - components/ui/button.tsx - Button component
  // - lib/validation.ts - Validation schemas
  // - lib/api-client.ts - API client functions
  //
  // Example form structure:
  // <form onSubmit={handleSubmit}>
  //   <div className="space-y-4">
  //     <div>
  //       <label>Title</label>
  //       <Input value={title} onChange={...} />
  //       {errors.title && <p className="text-destructive">{errors.title}</p>}
  //     </div>
  //     ...
  //     <Button type="submit" disabled={isSubmitting}>
  //       {isSubmitting ? 'Creating...' : 'Create Task'}
  //     </Button>
  //   </div>
  // </form>

  return (
    <div className="p-8 border rounded-lg">
      <p className="text-muted-foreground text-center">
        TODO: Implement TaskForm component
      </p>
      <p className="text-sm text-muted-foreground text-center mt-2">
        See component file comments for implementation guidance
      </p>
    </div>
  )
}
