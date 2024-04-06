export function utilFormatTaskList(rawTaskList) {
	return rawTaskList.map((task) => ({
		id: Number(task.id),
		title: task.title,
		isCompleted: !!Number(task.is_completed),
		dueDate: task.due_date,
		// description: task.description,
		// tags: task.tags?.map(tag => ({text: tag, color: utilRandomColor()})),
	}))
}