<script>
import { mapGetters, mapActions } from 'vuex'
import TaskActions from '@/components/tasks/sections/TaskActions.vue'
import TaskList from '@/components/tasks/sections/TaskList.vue'
import ErrorHandler from '@/components/shared/ErrorHandler.vue'
import MixinTaskList from '@/components/tasks/mixins/mixinTaskList.js'

export default {
  components: { TaskActions, TaskList, ErrorHandler },
  mixins: [MixinTaskList],
  data() {
    return {
      // taskListUpdated: [],
    }
  },
  async fetch() {
    // await this.fetchTaskList()
  },
  computed: {
    // ...mapGetters('task-store', ['taskList']),
  },
  watch: {
    // 'taskList.data'(newValue, oldValue) {
    //   this.taskListUpdated = this.taskListCreatedDateAscending
    // },
  },
  methods: {
    ...mapActions('task-store', ['deleteTask']),
    async removeTask(taskId) {
      // TODO: Crear un modal personalizado
      const confirm = window.confirm('You want delete this task?')
      if (!confirm) return null

      await this.deleteTask(taskId)
      this.$toast.success('Task deleted successfully')

      await this.fetchTaskList()
    },
    // changeAlphaOrder(isAscending) {
    //   this.taskListUpdated = isAscending
    //     ? this.taskListAlphaAscending
    //     : this.taskListAlphaDescending
    // },
    // changeCreatedDateOrder(isAscending) {
    //   this.taskListUpdated = isAscending
    //     ? this.taskListCreatedDateAscending
    //     : this.taskListCreatedDateDescending
    // },
  },
}
</script>

<template>
  <div>
    <TaskActions
      class="mb-10"
      @change-alpha-order="mixinChangeAlphaOrder"
      @change-created-date-order="mixinChangeCreatedDateOrder"
    />

    <ErrorHandler
      :is-loading="mixinTaskList.isLoading"
      :is-error="mixinTaskList.isError"
      :is-empty="!true"
    >
      <!-- :is-empty="!mixinTaskList.data.length" -->
      <TaskList :task-list="mixinTaskList.data" @delete-task="removeTask" />
    </ErrorHandler>
  </div>
</template>

<style lang="scss" scoped></style>
