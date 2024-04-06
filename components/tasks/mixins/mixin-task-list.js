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
      _taskListUpdated: [],
      _taskListOrders: {},
      _isError: false,
      _isLoading: false,
    }
  },
  async fetch() {
    await this.mixinGetTaskList()
  },
  computed: {
    ...mapGetters('task.store', ['taskList']),
    mixinTaskList() {
      return {
        data: this.$data._taskListUpdated,
        isLoading: this.$data._isLoading,
        isError: this.$data._isError,
      }
    },
  },
  watch: {
    taskList(newTaskList, oldValue) {
      const taskListCreatedAtAscendingOrder = utilSortTasksCreatedDate({
        taskList: newTaskList,
      })

      this.$data._taskListUpdated = taskListCreatedAtAscendingOrder

      this.$data._taskListOrders = {
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

    mixinTaskList(newTaskList, oldValue) {
      console.log('🚀 ~ taskList ~ newTaskList:', newTaskList)
    },
  },
  methods: {
    ...mapMutations('task.store', ['setTaskList']),
    async mixinGetTaskList() {
      const provider = getAll
      try {
        this.$data._isLoading = true
        const rawTaskList = await getTaskList(provider)
        this.$data._isLoading = false

        const taskList = utilFormatTaskList(rawTaskList)
        this.setTaskList(taskList)
      } catch (error) {
        console.error(error)
        this.$data._isError = true
        this.$data._isLoading = false
      }
    },
    mixinChangeAlphaOrder(isAscending) {
      this.$data._taskListUpdated = isAscending
        ? this.$data._taskListOrders.alphaAscending
        : this.$data._taskListOrders.alphaDescending
    },
    mixinChangeCreatedDateOrder(isAscending) {
      this.$data._taskListUpdated = isAscending
        ? this.$data._taskListOrders.createdDateAscending
        : this.$data._taskListOrders.createdDateDescending
    },
  },
}

export default mixinTaskList
