import { mapGetters, mapMutations } from 'vuex'
import { getAll } from '@/components/tasks/services/providers/task-axios-provider.js'
import { getTaskList } from '@/components/tasks/services/task-service.js'
// import { utilRandomColor, utilSplitStringByComma } from '@/utils'
import {
  utilSortTasksAlpha,
  utilSortTasksCreatedDate,
} from '@/components/tasks/utils'

// Definir el mixin
const mixinTaskList = {
  data() {
    return {
      // taskList: {
      //   data: [],
      //   isError: false,
      //   isLoading: false,
      // },
      ataskList: [],
      ataskListOrders: {},
      aisError: false,
      aisLoading: false,
    }
  },
  // async fetch() {
  //   await this.mixinGetTaskList()
  // },
  async created() {
    await this.mixinGetTaskList()
  },
  computed: {
    ...mapGetters('task.store', ['taskList']),
    mixinTaskList() {
      console.log('🚀 ~ mixinTaskList ~ this.ataskList:', this.ataskList)
      return {
        data: this.ataskList,
        isLoading: this.aisLoading,
        isError: this.aisError,
      }
    },
    // _taskListAlphaAscending(state) {
    //   return utilSortTasksAlpha({ taskList: this.taskList })
    // },
    // _taskListAlphaDescending(state) {
    //   return utilSortTasksAlpha({
    //     taskList: this.taskList,
    //     ascending: false,
    //   })
    // },
    // _taskListCreatedDateAscending(state) {
    //   return utilSortTasksCreatedDate({ taskList: this.taskList })
    // },
    // _taskListCreatedDateDescending(state) {
    //   return utilSortTasksCreatedDate({
    //     taskList: this.taskList,
    //     ascending: false,
    //   })
    // },
    // taskList() {
    //   return this.store.jobList
    // },
    // error() {
    //   return this.store.error
    // },
    // isLoading() {
    //   return this.store.pending
    // },
    // isError() {
    //   return !!this.store.error
    // },
  },
  watch: {
    taskList(newTaskList, oldValue) {
      this.ataskList = newTaskList
      console.log('🚀 ~ taskList ~ newTaskList:', newTaskList, this.ataskList)

      this.ataskListOrders = {
        alphaAscending: utilSortTasksAlpha({ taskList: newTaskList }),
        alphaDescending: utilSortTasksAlpha({
          taskList: this.taskList,
          ascending: false,
        }),
        createdDateAscending: utilSortTasksCreatedDate({
          taskList: this.taskList,
        }),
        createdDateDescending: utilSortTasksCreatedDate({
          taskList: this.taskList,
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
        this.aisLoading = true
        const rawTaskList = await getTaskList(provider)
        console.log('🚀 ~ mixinGetTaskList ~ rawTaskList:', rawTaskList)
        this.aisLoading = false

        const taskList = this.aformatTaskList(rawTaskList)
        this.setTaskList(taskList)
      } catch (error) {
        console.error(error)
        this.aisError = true
        this.aisLoading = false
      }
    },
    aformatTaskList(rawTaskList) {
      return rawTaskList.map((task) => ({
        id: Number(task.id),
        title: task.title,
        isCompleted: !!Number(task.is_completed),
        dueDate: task.due_date,
        // description: task.description,
        // tags: task.tags?.map(tag => ({text: tag, color: utilRandomColor()})),
      }))
    },

    mixinChangeAlphaOrder(isAscending) {
      this.ataskList = isAscending
        ? this.ataskListOrders.alphaAscending
        : this.ataskListOrders.alphaDescending
    },
    mixinChangeCreatedDateOrder(isAscending) {
      this.ataskList = isAscending
        ? this.ataskListOrders.createdDateAscending
        : this.ataskListOrders.createdDateDescending
    },
  },
}

export default mixinTaskList
