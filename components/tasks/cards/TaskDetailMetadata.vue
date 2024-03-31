<script>
import BaseCard from '@/components/base/BaseCard.vue'
import TaskDetailMetadataHeader from '@/components/tasks/cards/TaskDetailMetadataHeader.vue'
import TaskDetailMetadataFooter from '@/components/tasks/cards/TaskDetailMetadataFooter.vue'
export default {
  components: { BaseCard, TaskDetailMetadataHeader, TaskDetailMetadataFooter },
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
    tags: {
      type: Array,
      default: () => [],
      required: false,
    },
    createdAt: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<template>
  <BaseCard class="task-metadata">
    <div>
      <TaskDetailMetadataHeader
        class="task-metadata__header mb-2"
        :is-completed="isCompleted"
        :due-date="dueDate"
      />
      <div class="mb-3">
        <h2 class="text-h5 dark--text text--lighten-3 mb-1">{{ title }}</h2>
        <h3 class="text-body-2 primary--text text--lighten-1">#{{ id }}</h3>
      </div>
      <TaskDetailMetadataFooter
        v-if="tags.length"
        class="task-metadata__footer mb-2"
        :tags="tags"
      />
    </div>
    <div class="task-metadata__actions">
      <v-btn :to="`/edit/${id}`" color="warning" depressed>Edit task</v-btn>
    </div>
  </BaseCard>
</template>

<style lang="scss" scoped>
.task-metadata {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
