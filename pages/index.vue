<script>
import TaskActions from '@/components/tasks/sections/TaskActions.vue'

export default {
  name: 'IndexPage',
  components: { TaskActions },
}
</script>

<template>
  <div style="height: 1000vh">
    <TaskActions />
  </div>
</template>

<style lang="scss" scoped>
.actions {
  display: flex;

  &__icons {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
