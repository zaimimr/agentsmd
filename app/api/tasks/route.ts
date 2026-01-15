import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { CreateTaskInput } from '@/types/task'

export async function GET() {
  try {
    const tasks = await db.getTasks()
    return NextResponse.json(tasks)
  } catch (error) {
    console.error('Failed to fetch tasks:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // TODO: Add validation using Zod schema from lib/validation.ts
    // const result = createTaskSchema.safeParse(body)
    // if (!result.success) {
    //   return NextResponse.json(
    //     { error: result.error.message },
    //     { status: 400 }
    //   )
    // }

    const taskInput: CreateTaskInput = {
      title: body.title,
      description: body.description,
      status: body.status || 'todo',
      priority: body.priority || 'medium',
      dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
    }

    const task = await db.createTask(taskInput)
    return NextResponse.json(task, { status: 201 })
  } catch (error) {
    console.error('Failed to create task:', error)
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    )
  }
}
