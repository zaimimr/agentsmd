import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { db } from "@/lib/db";

export default async function Home() {
  const tasks = await db.getTasks();
  const todoCount = tasks.filter((t) => t.status === "todo").length;
  const inProgressCount = tasks.filter(
    (t) => t.status === "in-progress"
  ).length;
  const doneCount = tasks.filter((t) => t.status === "done").length;

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to AgentsMD
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A workshop project for learning agentic coding patterns with Claude
          Code
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link href="/tasks">
            <Button>View All Tasks</Button>
          </Link>
          <Link href="/tasks/new">
            <Button variant="outline">Create New Task</Button>
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{todoCount}</CardTitle>
            <CardDescription>To Do</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Tasks waiting to be started
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{inProgressCount}</CardTitle>
            <CardDescription>In Progress</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Tasks currently being worked on
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{doneCount}</CardTitle>
            <CardDescription>Done</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Completed tasks</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Workshop Goals</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>1. AGENTS.md</CardTitle>
              <CardDescription>Onboard AI as a team member</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Learn how to create comprehensive onboarding documentation that
                teaches AI about your project patterns, conventions, and
                architecture.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Subagents</CardTitle>
              <CardDescription>
                Divide work into specialized roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Use RepoCartographer, TestWriter, and DiffReviewer to handle
                specific tasks with focused context and expertise.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. /commands</CardTitle>
              <CardDescription>Standardize workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Create reusable commands like /finish, /pr, and /feature to
                ensure consistent, professional AI-assisted development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Hands-on Practice</CardTitle>
              <CardDescription>
                Build features with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Complete progressive tasks from following patterns to building
                complete features, all with AI guidance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted rounded-lg p-6 space-y-2">
        <h3 className="text-lg font-semibold">Ready to start?</h3>
        <p className="text-muted-foreground">
          Open <code className="bg-background px-2 py-1 rounded">TODO.md</code>{" "}
          to see your workshop tasks, then start working through them with your
          AI.
        </p>
      </section>
    </div>
  );
}
