import { mapGetters, mapMutations } from 'vuex'
import { get } from '@/components/tasks/services/providers/task-axios-provider.js'
import { getTask } from '@/components/tasks/services/task-service.js'
import { utilFormatTask } from '@/components/tasks/utils'

const mixinTaskList = {
  data() {
    return {
      mixinTask: {
        data: {},
        isLoading: false,
        isError: false,
      },
    }
  },
  async fetch() {
    const taskId = this.$route.params.id
    await this.mixinGetTask(taskId)
  },
  computed: {
    ...mapGetters('task.store', ['task']),
  },
  watch: {
    task(newTask, oldValue) {
      this.mixinTask.data = newTask
    },
  },
  methods: {
    ...mapMutations('task.store', ['setTask']),
    async mixinGetTask(taskId) {
      const provider = get
      try {
        this.mixinTask.isLoading = true
        const rawTask = await getTask(provider, taskId)
        this.mixinTask.isLoading = false

        const task = utilFormatTask(rawTask)
        this.setTask(task)
      } catch (error) {
        console.error(error)
        this.mixinTask.isError = true
        this.mixinTask.isLoading = false
      }
    },
  },
}

export default mixinTaskList
