<script>
import { mapGetters, mapActions } from 'vuex'
import TaskCard from '@/components/tasks/cards/TaskCard.vue'

export default {
  components: { TaskCard },
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
  <section class="task-list">
    <template v-if="taskList.isError">
      <h2 class="text-center dark--text text--lighten-4 mt-6">
        An error has occurred, please try again or reload the page
      </h2>
    </template>
    <template v-else-if="taskList.isLoading && !taskList.data.length">
      <h2 class="text-center dark--text text--lighten-4 mt-6">Loading...</h2>
    </template>

    <transition-group v-else name="list" class="task-list__content" tag="div">
      <TaskCard
        v-for="task in taskList.data"
        :id="task.id"
        :key="task.id"
        :title="task.title"
        :is-completed="task.isCompleted"
        :due-date="task.dueDate"
        class="task"
        @delete="removeTask"
      />
    </transition-group>
  </section>
</template>

<style lang="scss" scoped>
.task-list {
	&__content {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1rem;
	}
}

// .list-enter-active {
//   animation: slide-fade-right 0.5s ease;
// }
// .list-leave-active {
//   animation: slide-fade-right 0.5s ease reverse;
// }
.list-enter-active,
.list-leave-active {
	transition: 0.5s ease;
	transition-property: transform opacity
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
