import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function NewTaskPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create New Task</h1>
        <p className="text-muted-foreground mt-1">
          Add a new task to your workflow
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Task Form</CardTitle>
          <CardDescription>
            Fill in the details to create a new task
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* TODO: Integrate TaskForm component here */}
          {/* Example: <TaskForm onSuccess={(task) => router.push(`/tasks/${task.id}`)} /> */}

          <div className="space-y-4 text-center py-8">
            <p className="text-muted-foreground">
              TaskForm component needs to be implemented
            </p>
            <p className="text-sm text-muted-foreground">
              See TODO.md for implementation guidance
            </p>
          </div>

          {/* TODO: Add validation */}
          {/* - Use Zod schema from lib/validation.ts */}
          {/* - Show inline error messages */}
          {/* - Disable submit during API call */}
          {/* - Handle API errors gracefully */}
        </CardContent>
      </Card>

      <div className="flex justify-start">
        <Link href="/tasks">
          <Button variant="outline">Back to Tasks</Button>
        </Link>
      </div>
    </div>
  );
}
