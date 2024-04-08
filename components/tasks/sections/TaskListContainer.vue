<script>
import { mapActions } from 'vuex'
import TaskActions from '@/components/tasks/sections/TaskActions.vue'
import TaskList from '@/components/tasks/sections/TaskList.vue'
import ErrorHandler from '@/components/shared/ErrorHandler.vue'
import { MixinTaskList, MixinDeleteTask } from '@/components/tasks/mixins'

export default {
  components: { TaskActions, TaskList, ErrorHandler },
  mixins: [MixinTaskList, MixinDeleteTask],
  data() {
    return {}
  },
  methods: {
    ...mapActions('task-store', ['deleteTask']),
    async removeTask(taskId) {
      // TODO: Crear un modal personalizado
      const confirm = window.confirm('You want delete this task?')
      if (!confirm) return null

      await this.mixinDeleteTask(taskId)
      this.$toast.success('Task deleted successfully')

      await this.mixinGetTaskList()
    },
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
      :is-empty="!mixinTaskList.data.length"
    >
      <TaskList :task-list="mixinTaskList.data" @delete-task="removeTask" />
    </ErrorHandler>
  </div>
</template>

<style lang="scss" scoped></style>
