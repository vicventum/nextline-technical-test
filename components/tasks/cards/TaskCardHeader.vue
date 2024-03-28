<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    // isCompleted: {
    //   type: Boolean,
    //   default: false,
    //   required: true,
    // },
  },
}
</script>

<template>
  <header class="task-header">
    <div class="task-header__content">
      <!-- <v-chip
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
      </v-chip> -->

      <h2 class="text-h6">{{ title }}</h2>
    </div>
    <v-btn icon color="error lighten-1">
      <v-icon>mdi-trash-can-outline</v-icon>
    </v-btn>
  </header>
</template>

<style lang="scss" scoped>
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &__content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>
