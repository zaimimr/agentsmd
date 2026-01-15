'use client'

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { TaskForm } from "@/components/TaskForm";
import Link from "next/link";

export default function NewTaskPage() {
  const router = useRouter();

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
          <TaskForm
            onSuccess={(task) => router.push(`/tasks/${task.id}`)}
            onCancel={() => router.push('/tasks')}
          />
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
