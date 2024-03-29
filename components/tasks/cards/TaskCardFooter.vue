<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
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
  computed: {
    smAndUp() {
      return this.$vuetify.breakpoint.smAndUp
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
    <div class="task-footer__content">
      <v-chip
        v-if="isCompleted"
        color="success darken-1"
        text-color="white"
        small
      >
        <v-avatar left>
          <v-icon small>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        <span v-if="smAndUp">Completed</span>
      </v-chip>
      <v-chip v-else color="warning" text-color="white" small>
        <v-avatar left>
          <v-icon small>mdi-alert-circle</v-icon>
        </v-avatar>
        <span v-if="smAndUp">Pending</span>
      </v-chip>

      <v-divider vertical />

      <span class="text-body-2 light--text text--darken-4">
        Deadline: {{ dueDate }}
      </span>
    </div>

    <div class="task-footer__actions">
      <v-btn :to="`/edit/${id}`" color="warning" outlined small> Edit </v-btn>
      <v-btn :to="`/${id}`" color="primary" depressed small> View </v-btn>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  &__tags {
    display: flex;
    gap: 0.5rem;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
