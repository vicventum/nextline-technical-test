<script>
import { mapGetters, mapActions } from 'vuex'
import FormTask from '@/components/tasks/forms/FormTask.vue'

export default {
  components: { FormTask },
  data() {
    return {
      taskId: '',
    }
  },
  async fetch() {
    this.taskId = this.$route.params.id
    await this.getTask(this.taskId)
  },
  computed: {
    ...mapGetters('task-store', ['task', 'editingTask']),
  },
  methods: {
    ...mapActions('task-store', ['editTask']),
    async submit(data) {
      await this.editTask({ taskId: this.taskId, newData: data })

      // this.$router.push('/')
    },
  },
}
</script>

<template>
  <FormTask
    :task-data="task.data"
    :is-loading="editingTask.isLoading"
    submit-button-text="Edit task"
    @submit="submit"
  />
</template>

<style lang="scss" scoped></style>
