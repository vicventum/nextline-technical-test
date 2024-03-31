<script>
import { mapGetters, mapActions } from 'vuex'
import FormTask from '@/components/tasks/forms/FormTask.vue'

export default {
  components: { FormTask },
  computed: {
    ...mapGetters('task-store', ['creatingTask']),
  },
  methods: {
    ...mapActions('task-store', ['createTask']),
    async submit(data) {
      await this.createTask(data)

      // this.$router.push('/')
    },
  },
}
</script>

<template>
  <FormTask
    :is-loading="creatingTask.isLoading"
    submit-button-text="Create Task"
    @submit="submit"
  />
</template>

<style lang="scss" scoped></style>
