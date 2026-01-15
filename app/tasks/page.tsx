import { db } from "@/lib/db";
import { TaskListWithFilter } from "@/components/TaskListWithFilter";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function TasksPage() {
  const tasks = await db.getTasks();

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

      <TaskListWithFilter tasks={tasks} />
    </div>
  );
}
