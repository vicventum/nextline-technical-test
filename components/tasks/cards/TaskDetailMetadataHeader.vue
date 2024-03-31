<script>
import TaskDetailDeadline from '@/components/tasks/details/TaskDetailDeadline.vue'

export default {
  components: { TaskDetailDeadline,},
  props: {
    isCompleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    dueDate: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<template>
  <footer class="task-metadata-header">
    <TaskDetailDeadline :is-completed="isCompleted" :due-date="dueDate" />
  </footer>
</template>

<style lang="scss" scoped>
.task-metadata-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}
</style>
