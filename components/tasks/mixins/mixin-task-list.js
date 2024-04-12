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
      mixinTaskList: {
        data: [],
        isLoading: false,
        isError: false,
      },
      mixinTaskListOrders: {},
    }
  },
  async fetch() {
    await this.mixinGetTaskList()
  },
  computed: {
    ...mapGetters('task.store', ['taskList']),
  },
  watch: {
    taskList(newTaskList, oldValue) {
      const taskListCreatedAtAscendingOrder = utilSortTasksCreatedDate({
        taskList: newTaskList,
      })

      this.mixinTaskList.data = taskListCreatedAtAscendingOrder

      this.mixinTaskListOrders = {
        alphaAscending: utilSortTasksAlpha({ taskList: newTaskList }),
        alphaDescending: utilSortTasksAlpha({
          taskList: newTaskList,
          ascending: false,
        }),
        createdDateAscending: taskListCreatedAtAscendingOrder,
        createdDateDescending: utilSortTasksCreatedDate({
          taskList: newTaskList,
          ascending: false,
        }),
      }
    },
  },
  methods: {
    ...mapMutations('task.store', ['setTaskList']),
    async mixinGetTaskList() {
      const provider = getAll
      try {
        this.mixinTaskList.isLoading = true
        const rawTaskList = await getTaskList(provider)
        this.mixinTaskList.isLoading = false

        const taskList = utilFormatTaskList(rawTaskList)
        this.setTaskList(taskList)
      } catch (error) {
        console.error(error)
        this.mixinTaskList.isError = true
        this.mixinTaskList.isLoading = false
      }
    },
    mixinChangeAlphaOrder(isAscending) {
      this.mixinTaskList.data = isAscending
        ? this.mixinTaskListOrders.alphaAscending
        : this.mixinTaskListOrders.alphaDescending
    },
    mixinChangeCreatedDateOrder(isAscending) {
      this.mixinTaskList.data = isAscending
        ? this.mixinTaskListOrders.createdDateAscending
        : this.mixinTaskListOrders.createdDateDescending
    },
  },
}

export default mixinTaskList
