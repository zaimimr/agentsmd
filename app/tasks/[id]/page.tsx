import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { formatDate, formatRelativeDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface TaskDetailPageProps {
  params: Promise<{ id: string }>;
}

function getStatusBadgeVariant(status: string) {
  switch (status) {
    case "todo":
      return "secondary";
    case "in-progress":
      return "warning";
    case "done":
      return "success";
    default:
      return "default";
  }
}

function getPriorityBadgeVariant(priority: string) {
  switch (priority) {
    case "low":
      return "secondary";
    case "medium":
      return "default";
    case "high":
      return "destructive";
    default:
      return "outline";
  }
}

export default async function TaskDetailPage({ params }: TaskDetailPageProps) {
  const { id } = await params;
  const task = await db.getTask(id);

  if (!task) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">{task.title}</h1>
          <p className="text-muted-foreground mt-1">
            Created {formatRelativeDate(task.createdAt)}
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant={getStatusBadgeVariant(task.status)}>
            {task.status.replace("-", " ")}
          </Badge>
          <Badge variant={getPriorityBadgeVariant(task.priority)}>
            {task.priority} priority
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
          {task.description && (
            <CardDescription className="text-base">
              {task.description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <p className="capitalize">{task.status.replace("-", " ")}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Priority</p>
              <p className="capitalize">{task.priority}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Created</p>
              <p>{formatDate(task.createdAt)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Last Updated</p>
              <p>{formatDate(task.updatedAt)}</p>
            </div>
            {task.dueDate && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Due Date</p>
                <p>{formatDate(task.dueDate)}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Link href="/tasks">
          <Button variant="outline">Back to Tasks</Button>
        </Link>
        <Link href={`/tasks/${task.id}/edit`}>
          <Button>Edit Task</Button>
        </Link>
      </div>
    </div>
  );
}
