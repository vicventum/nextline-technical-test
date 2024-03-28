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
      <TaskCard
        v-for="task in taskList"
        :key="task.id"
        class="task"
        :title="task.title"
        :is-completed="task.isCompleted"
        :due-date="task.dueDate"
      />
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
