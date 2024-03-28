<script>
import TaskCardHeader from './TaskCardHeader.vue'
// import TaskCardContent from './TaskCardContent.vue'
import TaskCardFooter from './TaskCardFooter.vue'

export default {
  components: { TaskCardHeader, TaskCardFooter },
  props: {
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
}
</script>

<template>
  <BaseCard class="task">
    <TaskCardHeader class="mb-2" :title="title" />
    <!-- <TaskCardContent class="mb-2" :description="description" /> -->
    <TaskCardFooter
      class="mb-2"
      :is-completed="isCompleted"
      :due-date="dueDate"
    />
  </BaseCard>
</template>

<style lang="scss" scoped>
.task {
  cursor: pointer;

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
