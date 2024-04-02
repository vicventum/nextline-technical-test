<script>
import { mapGetters, mapActions } from 'vuex'
import TaskActions from '@/components/tasks/sections/TaskActions.vue'
import TaskList from '@/components/tasks/sections/TaskList.vue'
import ErrorHandler from '@/components/shared/ErrorHandler.vue'

export default {
  components: { TaskActions, TaskList, ErrorHandler },
  data() {
    return {
      taskListUpdated: [],
    }
  },
  async fetch() {
    await this.fetchTaskList()
  },
  computed: {
    ...mapGetters('task-store', [
      'taskList',
      'taskListAlphaAscending',
      'taskListAlphaDescending',
      'taskListCreatedDateAscending',
      'taskListCreatedDateDescending',
    ]),
  },
  watch: {
    'taskList.data'(newValue, oldValue) {
      this.taskListUpdated = this.taskListCreatedDateAscending
    },
  },
  methods: {
    ...mapActions('task-store', ['fetchTaskList', 'deleteTask']),
    async removeTask(taskId) {
      // TODO: Crear un modal personalizado
      const confirm = window.confirm('You want delete this task?')
      if (!confirm) return null

      await this.deleteTask(taskId)
      this.$toast.success('Task deleted successfully')

      await this.fetchTaskList()
    },
    changeAlphaOrder(isAscending) {
      this.taskListUpdated = isAscending
        ? this.taskListAlphaAscending
        : this.taskListAlphaDescending
    },
    changeCreatedDateOrder(isAscending) {
      this.taskListUpdated = isAscending
        ? this.taskListCreatedDateAscending
        : this.taskListCreatedDateDescending
    },
  },
}
</script>

<template>
  <div>
    <TaskActions
      class="mb-10"
      @change-alpha-order="changeAlphaOrder"
      @change-created-date-order="changeCreatedDateOrder"
    />

    <ErrorHandler
      :is-loading="taskList.isLoading"
      :is-error="taskList.isError"
      :is-empty="!taskListUpdated.length"
    >
      <TaskList :task-list="taskListUpdated" @delete-task="removeTask" />
    </ErrorHandler>
  </div>
</template>

<style lang="scss" scoped></style>
