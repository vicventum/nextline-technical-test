<script>
import TaskCard from '../components/tasks/cards/TaskCard.vue'
import TaskActions from '@/components/tasks/sections/TaskActions.vue'

export default {
  name: 'IndexPage',
  components: { TaskActions, TaskCard },
}
</script>

<template>
  <div style="height: 1000vh">
    <TaskActions class="mb-10" />

    <section class="task-gallery">
      <TaskCard class="task"> </TaskCard>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.task-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
</style>
