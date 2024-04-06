import { edit } from '@/components/tasks/services/providers/task-axios-provider.js'
import { editTask } from '@/components/tasks/services/task-service.js'

const mixinEditTask = {
  data() {
    return {
      mixinEditingTask: {
        isLoading: false,
        isError: false,
      },
    }
  },
  methods: {
    async mixinEditTask(taskId, newData) {
      const provider = edit
      try {
        this.mixinEditingTask.isLoading = true
        await editTask(provider, taskId, newData)
        this.mixinEditingTask.isLoading = false
      } catch (error) {
        console.error(error)
        this.mixinEditingTask.isError = true
        this.mixinEditingTask.isLoading = false
      }
    },
  },
}

export default mixinEditTask
