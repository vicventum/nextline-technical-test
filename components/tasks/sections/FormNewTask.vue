<script>
import FormTask from '@/components/tasks/forms/FormTask.vue'
import MixinCreateTask from '@/components/tasks/mixins/MixinCreateTask.js'

export default {
  components: { FormTask },
  mixins: [MixinCreateTask],
  methods: {
    async submit(data) {
      await this.mixinCreateTask(data)

      this.$toast.success('Task created successfully')
    },
  },
}
</script>

<template>
  <FormTask
    :is-loading="mixinCreatingTask.isLoading"
    submit-button-text="Create Task"
    @submit="submit"
  />
</template>

<style lang="scss" scoped></style>
