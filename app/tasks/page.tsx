import { db } from "@/lib/db";
import { TaskList } from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function TasksPage() {
  const tasks = await db.getTasks();

  // TODO: Add task filtering
  // Should integrate with TaskFilter component to filter by:
  // - Status (all, todo, in-progress, done)
  // - Priority (all, low, medium, high)
  // Note: This will require converting to a client component or using URL search params

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">All Tasks</h1>
          <p className="text-muted-foreground mt-1">
            Manage and organize your tasks
          </p>
        </div>
        <Link href="/tasks/new">
          <Button>Create Task</Button>
        </Link>
      </div>

      {/* TODO: Add TaskFilter component here */}
      {/* Example: <TaskFilter onFilterChange={handleFilterChange} /> */}

      <TaskList tasks={tasks} />
    </div>
  );
}
