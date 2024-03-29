<script>
import BaseCard from '@/components/base/BaseCard.vue'
import TaskCardHeader from '@/components/tasks/cards/TaskCardHeader.vue'
// import TaskCardContent from '@/components/tasks/cards/TaskCardContent.vue'
import TaskCardFooter from '@/components/tasks/cards/TaskCardFooter.vue'

export default {
  components: { TaskCardHeader, TaskCardFooter, BaseCard },
  props: {
    id: {
      type: Number,
      default: 0,
      required: true,
    },
    title: {
      type: String,
      default: '',
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
    // description: {
    //   type: String,
    //   default: '',
    //   required: false,
    // },
    // tags: {
    //   type: Array,
    //   default: () => [],
    //   required: false,
    // },
  },
  emits: ['delete'],
  methods: {
    deleteTask(taskId) {
      this.$emit('delete', taskId)
    },
  },
}
</script>

<template>
  <BaseCard class="task">
    <TaskCardHeader class="mb-2" :title="title" @delete="deleteTask(id)" />
    <!-- <TaskCardContent class="mb-2" :description="description" /> -->
    <TaskCardFooter
      :id="id"
      class="mb-2"
      :is-completed="isCompleted"
      :due-date="dueDate"
    />
  </BaseCard>
</template>

<style lang="scss" scoped>
.task {
  // cursor: pointer;
  transition-property: box-shadow, filter;
  transition-duration: 0.1s;
  transition-timing-function: ease-out;

  &:hover {
    filter: drop-shadow(0px 0px 1px var(--v-primary-base));
    // transform: scale(1.01);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
}
</style>
