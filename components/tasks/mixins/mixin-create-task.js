import { create } from '@/components/tasks/services/providers/task-axios-provider.js'
import { createTask } from '@/components/tasks/services/task-service.js'

const mixinCreateTask = {
  data() {
    return {
      mixinCreatingTask: {
        isLoading: false,
        isError: false,
      },
    }
  },
  methods: {
    async mixinCreateTask(task) {
      const provider = create
      try {
        this.mixinCreatingTask.isLoading = true
        await createTask(provider, task)
        this.mixinCreatingTask.isLoading = false
      } catch (error) {
        console.error(error)
        this.mixinCreatingTask.isError = true
        this.mixinCreatingTask.isLoading = false
      }
    },
  },
}

export default mixinCreateTask
