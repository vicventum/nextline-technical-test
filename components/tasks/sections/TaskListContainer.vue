<script>
import { mapGetters, mapActions } from 'vuex'
import TaskActions from '@/components/tasks/sections/TaskActions.vue'
import TaskList from '@/components/tasks/sections/TaskList.vue'
import ErrorHandler from '@/components/shared/ErrorHandler.vue'

export default {
  components: { TaskActions, TaskList, ErrorHandler },
  async fetch() {
    await this.fetchTaskList()
  },
  computed: {
    ...mapGetters('task-store', ['taskList']),
  },
  methods: {
    ...mapActions('task-store', ['fetchTaskList', 'deleteTask']),
    async removeTask(taskId) {
      // TODO: Crear un modal personalizado
      const confirm = window.confirm('You want delete this task?')
      if (!confirm) return null
      await this.deleteTask(taskId)
      await this.fetchTaskList()
    },
  },
}
</script>

<template>
  <div>
    <TaskActions class="mb-10" />

    <ErrorHandler
      :is-loading="taskList.isLoading"
      :is-error="taskList.isError"
      :is-empty="!taskList.data.length"
    >
      <TaskList :task-list="taskList.data" @delete-task="removeTask" />
    </ErrorHandler>
  </div>
</template>

<style lang="scss" scoped></style>
