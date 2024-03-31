<script>
export default {
  props: {
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
  },
}
</script>

<template>
  <footer class="task-metadata-header">
    <v-chip
      v-if="isCompleted"
      color="success darken-1"
      text-color="white"
      small
    >
      <v-avatar left>
        <v-icon small>mdi-checkbox-marked-circle</v-icon>
      </v-avatar>
      Completed
    </v-chip>
    <v-chip v-else color="warning" text-color="white" small>
      <v-avatar left>
        <v-icon small>mdi-alert-circle</v-icon>
      </v-avatar>
      Pending
    </v-chip>

    <v-divider vertical />

    <span v-if="dueDate" class="text-body-2 light--text text--darken-4">
      Deadline: {{ dueDate }}
    </span>
  </footer>
</template>

<style lang="scss" scoped>
.task-metadata-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}
</style>
