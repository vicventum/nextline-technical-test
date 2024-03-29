<script>
import { mapGetters, mapActions } from 'vuex'
import TaskDetailMetadata from '@/components/tasks/cards/TaskDetailMetadata.vue'
import TaskDetailContent from '@/components/tasks/cards/TaskDetailContent.vue'
import TaskDetailFooter from '@/components/tasks/cards/TaskDetailFooter.vue'

export default {
  components: { TaskDetailMetadata, TaskDetailContent, TaskDetailFooter },
  data() {
    return {
      taskId: 1749,
      taskData: {
        id: 0,
        title: '',
        isCompleted: false,
        dueDate: '',
        description: '',
        comments: '',
        tags: [],
        token: '',
        createdAt: '',
        updatedAt: '',
      },
    }
  },
  async fetch() {
    this.taskId = this.$route.params.id
    this.taskData = { ...(await this.getTask(this.taskId)) }
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
    <template v-else-if="task.isLoading && !task.data.length">
      <h2 class="text-center dark--text text--lighten-4 mt-6">Loading...</h2>
    </template>
    <div v-else>
      <TaskDetailMetadata
        :id="taskData.id"
        class="mb-6"
        :title="taskData.title"
        :is-completed="taskData.isCompleted"
        :due-date="taskData.dueDate"
        :tags="taskData.tags"
        :created-at="taskData.createdAt"
      />
      <TaskDetailContent
        class="mb-6"
        :description="taskData.description"
        :comments="taskData.comments"
      />
      <TaskDetailFooter :id="taskData.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
