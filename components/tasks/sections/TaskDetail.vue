<script>
import ErrorHandler from '@/components/shared/ErrorHandler.vue'
import TaskDetailMetadata from '@/components/tasks/details/TaskDetailMetadata.vue'
import TaskDetailContent from '@/components/tasks/details/TaskDetailContent.vue'
import TaskDetailFooter from '@/components/tasks/details/TaskDetailFooter.vue'
import MixinTask from '@/components/tasks/mixins/mixinTask.js'

export default {
  components: {
    TaskDetailMetadata,
    TaskDetailContent,
    TaskDetailFooter,
    ErrorHandler,
  },
  mixins: [MixinTask],
}
</script>

<template>
  <div>
    <ErrorHandler
      :is-loading="mixinTask.isLoading"
      :is-error="mixinTask.isError"
    >
      <TaskDetailMetadata
        :id="mixinTask.data.id"
        class="mb-6"
        :title="mixinTask.data.title"
        :is-completed="mixinTask.data.isCompleted"
        :due-date="mixinTask.data.dueDate"
        :tags="mixinTask.data.tags"
        :created-at="mixinTask.data.createdAt"
      />
      <TaskDetailContent
        class="mb-6"
        :description="mixinTask.data.description"
        :comments="mixinTask.data.comments"
      />
    </ErrorHandler>
    <TaskDetailFooter
      v-if="!mixinTask.isError"
      :id="mixinTask.data.id"
      :class="{ 'mt-10': mixinTask.isLoading }"
      :is-loading="mixinTask.isLoading"
    />
  </div>
</template>

<style lang="scss" scoped></style>
