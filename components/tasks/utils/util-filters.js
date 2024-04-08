export function utilSortTasksAlpha({ taskList, ascending = true }) {
  return [...taskList].sort((a, b) => {
    const titleA = a.title.toUpperCase()
    const titleB = b.title.toUpperCase()

    if (titleA < titleB) return ascending ? -1 : 1
    if (titleA > titleB) return ascending ? 1 : -1

    return 0
  })
}
export function utilSortTasksCreatedDate({ taskList, ascending = true }) {
  console.log('🚀 ~ utilSortTasksCreatedDate ~ taskList:', taskList)
  return ascending ? [...taskList] : [...taskList].reverse()
}
