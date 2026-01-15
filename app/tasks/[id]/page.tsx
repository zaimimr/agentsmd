import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TaskDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function TaskDetailPage({ params }: TaskDetailPageProps) {
  const { id } = await params;

  // TODO: Implement task detail page
  //
  // Requirements:
  // - Fetch task by ID from database
  // - Display all task information (title, description, status, priority, dates)
  // - Show formatted dates using formatDate from lib/utils.ts
  // - Add "Edit" button (can link to /tasks/[id]/edit placeholder)
  // - Add "Back to Tasks" link
  // - Handle 404 case (task not found)
  //
  // Implementation steps:
  // 1. Import db from lib/db.ts
  // 2. Call await db.getTask(id)
  // 3. If not found, show 404 message
  // 4. Display task in a Card component
  // 5. Use Badge components for status and priority (see TaskCard.tsx for reference)
  //
  // Look at these files for reference:
  // - components/TaskCard.tsx - Similar display logic
  // - app/tasks/page.tsx - Server component data fetching pattern
  // - components/ui/card.tsx - Card components
  // - lib/utils.ts - Date formatting functions
  //
  // Example structure:
  // const task = await db.getTask(id)
  // if (!task) return <div>Task not found</div>
  //
  // return (
  //   <Card>
  //     <CardHeader>
  //       <CardTitle>{task.title}</CardTitle>
  //     </CardHeader>
  //     <CardContent>
  //       <div>Status: <Badge>{task.status}</Badge></div>
  //       ...
  //     </CardContent>
  //   </Card>
  // )

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Task Detail</h1>
        <p className="text-muted-foreground mt-1">Task ID: {id}</p>
      </div>

      <div className="p-8 border rounded-lg bg-muted/50">
        <p className="text-muted-foreground text-center">
          TODO: Implement task detail view
        </p>
        <p className="text-sm text-muted-foreground text-center mt-2">
          See file comments for implementation guidance
        </p>
      </div>

      <div className="flex gap-2">
        <Link href="/tasks">
          <Button variant="outline">Back to Tasks</Button>
        </Link>
      </div>
    </div>
  );
}
