<script>
import TaskDetailDeadline from '@/components/tasks/details/TaskDetailDeadline.vue'

export default {
  components: { TaskDetailDeadline },
  props: {
    id: {
      type: Number,
      default: 0,
      required: true,
    },
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
  <footer class="task-footer">
    <div class="task-footer__content">
      <TaskDetailDeadline :is-completed="isCompleted" :due-date="dueDate" />
    </div>

    <div class="task-footer__actions">
      <v-btn :to="`/edit/${id}`" color="warning" outlined small> Edit </v-btn>
      <v-btn :to="`/${id}`" color="primary" depressed small> View </v-btn>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  &__tags {
    display: flex;
    gap: 0.5rem;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
