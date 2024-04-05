import { mapGetters, mapMutations } from 'vuex'
import { getAll } from '@/components/tasks/services/providers/task-axios-provider.js'
import { getTaskList } from '@/components/tasks/services/task-service.js'
// import { utilRandomColor, utilSplitStringByComma } from '@/utils'
import {
  utilSortTasksAlpha,
  utilSortTasksCreatedDate,
  utilFormatTaskList,
} from '@/components/tasks/utils'

const mixinTaskList = {
  data() {
    return {
      taskListUpdated: [],
      taskListOrders: {},
      isError: false,
      isLoading: false,
    }
  },
  async fetch() {
    await this.mixinGetTaskList()
  },
  computed: {
    ...mapGetters('task.store', ['taskList']),
    mixinTaskList() {
      return {
        data: this.taskListUpdated,
        isLoading: this.isLoading,
        isError: this.isError,
      }
    },
  },
  watch: {
    taskList(newTaskList, oldValue) {
      const taskListCreatedAtAscendingOrder = utilSortTasksCreatedDate({
        taskList: this.taskList,
      })

      this.taskListUpdated = taskListCreatedAtAscendingOrder

      this.taskListOrders = {
        alphaAscending: utilSortTasksAlpha({ taskList: newTaskList }),
        alphaDescending: utilSortTasksAlpha({
          taskList: this.taskList,
          ascending: false,
        }),
        createdDateAscending: taskListCreatedAtAscendingOrder,
        createdDateDescending: utilSortTasksCreatedDate({
          taskList: this.taskList,
          ascending: false,
        }),
      }
    },

    mixinTaskList(newTaskList, oldValue) {
      console.log('🚀 ~ taskList ~ newTaskList:', newTaskList)
    },
  },
  methods: {
    ...mapMutations('task.store', ['setTaskList']),
    async mixinGetTaskList() {
      const provider = getAll
      try {
        this.isLoading = true
        const rawTaskList = await getTaskList(provider)
        this.isLoading = false

        const taskList = utilFormatTaskList(rawTaskList)
        this.setTaskList(taskList)
      } catch (error) {
        console.error(error)
        this.isError = true
        this.isLoading = false
      }
    },
    mixinChangeAlphaOrder(isAscending) {
      this.taskListUpdated = isAscending
        ? this.taskListOrders.alphaAscending
        : this.taskListOrders.alphaDescending
    },
    mixinChangeCreatedDateOrder(isAscending) {
      this.taskListUpdated = isAscending
        ? this.taskListOrders.createdDateAscending
        : this.taskListOrders.createdDateDescending
    },
  },
}

export default mixinTaskList
