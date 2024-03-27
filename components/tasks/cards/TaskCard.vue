<script>
import TaskCardHeader from './TaskCardHeader.vue'
import TaskCardContent from './TaskCardContent.vue'
import TaskCardFooter from './TaskCardFooter.vue'

export default {
  components: { TaskCardHeader, TaskCardContent, TaskCardFooter },
}
</script>

<template>
  <BaseCard class="task">
    <TaskCardHeader class="mb-2" />
    <TaskCardContent class="mb-2" />
    <TaskCardFooter class="mb-2" />
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
