import { utilRandomColor, utilSplitStringByComma } from '@/utils'

export function utilFormatTask(rawTask) {
  const task = Array.isArray(rawTask) ? rawTask[0] : rawTask

  // const formattedTags = formatTags(task.tags)

  return {
    id: Number(task.id),
    title: task.title,
    isCompleted: !!Number(task.is_completed),
    dueDate: task.due_date,
    description: task.description,
    tags: task.tags,
    comments: task.comments,
    token: task.token,
    createdAt: task.created_at,
    updatedAt: task.updated_at,
  }
}

function formatTags(tags) {
  const arrayTransformedTags = utilSplitStringByComma(tags)
  const formattedTags = arrayTransformedTags.map((tag) => ({
    text: tag,
    color: utilRandomColor(),
  }))
  return formattedTags
}