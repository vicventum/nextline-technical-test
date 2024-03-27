<script>
import TaskCardHeader from './TaskCardHeader.vue'

export default {
  components: { TaskCardHeader },
}
</script>

<template>
  <BaseCard class="task">
    <TaskCardHeader />
  </BaseCard>
</template>

<style lang="scss" scoped>
.task {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
}
</style>
