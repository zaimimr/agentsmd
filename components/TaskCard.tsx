"use client";

import { Task } from "@/types/task";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatRelativeDate } from "@/lib/utils";
import Link from "next/link";

interface TaskCardProps {
  task: Task;
  onUpdate?: (task: Task) => void;
  onDelete?: (id: string) => void;
}

function getStatusBadgeVariant(status: Task["status"]) {
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

function getPriorityBadgeVariant(priority: Task["priority"]) {
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

export function TaskCard({ task, onUpdate, onDelete }: TaskCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 flex-1">
            <CardTitle>
              <Link href={`/tasks/${task.id}`} className="hover:underline">
                {task.title}
              </Link>
            </CardTitle>
            {task.description && (
              <CardDescription className="line-clamp-2">
                {task.description}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge variant={getStatusBadgeVariant(task.status)}>
            {task.status.replace("-", " ")}
          </Badge>
          <Badge variant={getPriorityBadgeVariant(task.priority)}>
            {task.priority} priority
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Updated {formatRelativeDate(task.updatedAt)}
        </div>
        <div className="flex gap-2">
          <Link href={`/tasks/${task.id}`}>
            <Button variant="outline" size="sm">
              View
            </Button>
          </Link>
          {onDelete && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
