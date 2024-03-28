<script>
import InputListTask from '@/components/tasks/forms/InputListTask.vue'

export default {
  components: { InputListTask },
  data() {
    return {
      obg: { check: true, date: '2024-03-28' },
    }
  },
}
</script>

<template>
  <v-form class="form">
    <h2 class="mb-8 dark--text text--lighten-4">New Task</h2>

    <BaseCard class="mb-6">
      <InputListTask v-model="obg" />
    </BaseCard>

    <BaseCard class="form__actions">
      <v-btn color="success" depressed>Create task</v-btn>
    </BaseCard>
  </v-form>
</template>

<style lang="scss" scoped>
.form {
  &__actions {
    display: flex;
    justify-content: end;
  }
}
</style>
