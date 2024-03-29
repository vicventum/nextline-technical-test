<script>
import { mapGetters, mapActions } from 'vuex'
import TaskCard from '@/components/tasks/cards/TaskCard.vue'
import TaskActions from '@/components/tasks/sections/TaskActions.vue'
// import { getAll } from '@/components/tasks/services/providers/task-axios-provider'

export default {
  name: 'IndexPage',
  components: { TaskActions, TaskCard },
  async fetch() {
    await this.fetchTaskList()
  },
  computed: {
    ...mapGetters('task-store', ['taskList']),
  },
  methods: {
    ...mapActions('task-store', ['fetchTaskList']),
  },
}
</script>

<template>
  <div style="height: 1000vh">
    <TaskActions class="mb-10" />

    <section class="task-gallery">
      <template v-if="taskList.isError">
        <h2 class="text-center dark--text text--lighten-4 mt-6">
          An error has occurred, please try again or reload the page
        </h2>
      </template>
      <template v-else-if="taskList.isLoading">
        <h2 class="text-center dark--text text--lighten-4 mt-6">Loading...</h2>
      </template>
      <template v-else>
        <TaskCard
          v-for="task in taskList.data"
          :key="task.id"
          class="task"
          :title="task.title"
          :is-completed="task.isCompleted"
          :due-date="task.dueDate"
        />
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.task-gallery {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
}
</style>
