<script>
import TaskCard from '@/components/tasks/cards/TaskCard.vue'

export default {
  components: { TaskCard },
  props: {
    taskList: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['delete-task'],
  methods: {
    deleteTask(taskId) {
      this.$emit('delete-task', taskId)
    },
  },
}
</script>

<template>
  <transition-group name="list" class="task-list" tag="div">
    <TaskCard
      v-for="task in taskList"
      :id="task.id"
      :key="task.id"
      :title="task.title"
      :is-completed="task.isCompleted"
      :due-date="task.dueDate"
      class="task"
      data-testid="task"
      @delete="deleteTask"
    />
  </transition-group>
</template>

<style lang="scss" scoped>
.task-list {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
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
  transition-property: transform opacity;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
