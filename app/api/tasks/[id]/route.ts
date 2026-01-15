import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { UpdateTaskInput } from '@/types/task'

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function GET(_request: Request, context: RouteContext) {
  // TODO: Add try-catch error handling
  // Should return 404 if task not found, 500 for server errors

  const { id } = await context.params
  const task = await db.getTask(id)

  if (!task) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 })
  }

  return NextResponse.json(task)
}

export async function PUT(request: Request, context: RouteContext) {
  // TODO: Add try-catch error handling
  // TODO: Add validation using Zod schema
  // Should return 400 for validation errors, 404 if not found, 500 for server errors

  const { id } = await context.params
  const body = await request.json()

  const updateInput: UpdateTaskInput = {
    id,
    ...body,
  }

  const task = await db.updateTask(updateInput)

  if (!task) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 })
  }

  return NextResponse.json(task)
}

export async function DELETE(_request: Request, context: RouteContext) {
  // TODO: Add try-catch error handling
  // Should return 404 if task not found, 500 for server errors

  const { id } = await context.params
  const success = await db.deleteTask(id)

  if (!success) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
