<script>
import { mapGetters, mapActions } from 'vuex'
import TaskDetailMetadata from '@/components/tasks/cards/TaskDetailMetadata.vue'
import TaskDetailContent from '@/components/tasks/cards/TaskDetailContent.vue'
import TaskDetailFooter from '@/components/tasks/cards/TaskDetailFooter.vue'

export default {
  components: { TaskDetailMetadata, TaskDetailContent, TaskDetailFooter },
  data() {
    return {
      taskId: 0,
    }
  },
  async fetch() {
    this.taskId = this.$route.params.id
    await this.getTask(this.taskId)
  },
  computed: {
    ...mapGetters('task-store', ['task']),
  },
  methods: {
    ...mapActions('task-store', ['getTask']),
  },
}
</script>

<template>
  <div>
    <template v-if="task.isError">
      <h2 class="text-center dark--text text--lighten-4 mt-6">
        An error has occurred, please try again or reload the page
      </h2>
    </template>
    <template v-else-if="task.isLoading && !Object.keys(task.data).length">
      <h2 class="text-center dark--text text--lighten-4 mt-6">Loading...</h2>
    </template>
    <div v-else>
      <TaskDetailMetadata
        :id="task.data.id"
        class="mb-6"
        :title="task.data.title"
        :is-completed="task.data.isCompleted"
        :due-date="task.data.dueDate"
        :tags="task.data.tags"
        :created-at="task.data.createdAt"
      />
      <TaskDetailContent
        class="mb-6"
        :description="task.data.description"
        :comments="task.data.comments"
      />
      <TaskDetailFooter :id="task.data.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
