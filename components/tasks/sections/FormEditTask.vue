<script>
import FormTask from '@/components/tasks/forms/FormTask.vue'
import { MixinTask, MixinEditTask } from '@/components/tasks/mixins'

export default {
  components: { FormTask },
  mixins: [MixinTask, MixinEditTask],
  methods: {
    async submit(data) {
      const taskId = this.$route.params.id
      await this.mixinEditTask(taskId, data)
      this.$toast.success('Task edited successfully')
    },
  },
}
</script>

<template>
  <FormTask
    :task-data="mixinTask.data"
    :is-loading="mixinEditingTask.isLoading"
    submit-button-text="Edit task"
    @submit="submit"
  />
</template>

<style lang="scss" scoped></style>
