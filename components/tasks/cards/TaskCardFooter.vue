<script>
export default {
  props: {
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
  },
}
</script>

<template>
  <footer class="task-footer">
    <!-- <div class="task-footer__tags">
      <v-chip color="#E91E63" label outlined small dark>vue</v-chip>
      <v-chip color="#9C27B0" label outlined small dark>nuxt</v-chip>
      <v-chip color="#009688" label outlined small dark>javascript</v-chip>
    </div> -->
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

    <span class="text-body-2 light--text text--darken-4">
      Deadline: {{ dueDate }}
    </span>
  </footer>
</template>

<style lang="scss" scoped>
.task-footer {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &__tags {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
