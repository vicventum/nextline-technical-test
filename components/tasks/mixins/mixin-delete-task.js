import { remove } from '@/components/tasks/services/providers/task-axios-provider.js'
import { deleteTask } from '@/components/tasks/services/task-service.js'

const mixinDeleteTask = {
  data() {
    return {
      mixinDeletingTask: {
        isLoading: false,
        isError: false,
      },
    }
  },
  methods: {
    async mixinDeleteTask(taskId) {
      const provider = remove
      try {
        this.mixinDeletingTask.isLoading = true
        await deleteTask(provider, taskId)
        this.mixinDeletingTask.isLoading = false
      } catch (error) {
        console.error(error)
        this.mixinDeletingTask.isError = true
        this.mixinDeletingTask.isLoading = false
      }
    },
  },
}

export default mixinDeleteTask
