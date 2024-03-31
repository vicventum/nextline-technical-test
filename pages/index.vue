
<script>
import TaskActions from '@/components/tasks/sections/TaskActions.vue'
import TaskList from '@/components/tasks/sections/TaskList.vue'

export default {
  name: 'IndexPage',
  components: { TaskActions, TaskList },
}
</script>

<template>
  <div>
    <TaskActions class="mb-10" />

    <TaskList />
  </div>
</template>

<style lang="scss" scoped></style>
