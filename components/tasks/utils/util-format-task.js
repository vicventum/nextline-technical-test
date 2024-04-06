import { utilRandomColor, utilSplitStringByComma } from '@/utils'

export function utilFormatTask(rawTask) {
  const task = Array.isArray(rawTask) ? rawTask[0] : rawTask

  const arrayTransformedTags = utilSplitStringByComma(task.tags)
  const formattedTags = arrayTransformedTags.map((tag) => ({
    text: tag,
    color: utilRandomColor(),
  }))

  return {
    id: Number(task.id),
    title: task.title,
    isCompleted: !!Number(task.is_completed),
    dueDate: task.due_date,
    description: task.description,
    tags: formattedTags,
    comments: task.comments,
    token: task.token,
    createdAt: task.created_at,
    updatedAt: task.updated_at,
  }
}