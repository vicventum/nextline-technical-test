<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    primaryButtonText: {
      type: String,
      default: 'Save',
    },
    secondaryButtonText: {
      type: String,
      default: 'Back',
    },
  },
}
</script>

<template>
  <BaseCard class="form-actions">
    <v-btn class="dark--text text--lighten-4" text @click="$router.go(-1)">
      {{ secondaryButtonText }}
    </v-btn>
    <v-btn
      color="success"
      type="submit"
      :loading="isLoading"
      :disabled="isLoading"
      depressed
    >
      {{ primaryButtonText }}
    </v-btn>
    <!-- <p v-if="editingTask.isError">Error editing task</p> -->
  </BaseCard>
</template>

<style lang="scss" scoped>
.form-actions {
  display: flex;
  justify-content: end;
  gap: 1rem;
}
</style>
