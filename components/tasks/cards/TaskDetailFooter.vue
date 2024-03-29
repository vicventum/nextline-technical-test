<script>
export default {
  props: {
		id: {
      type: Number,
      default: 0,
      required: true,
    },
  },
}
</script>

<template>
  <BaseCard class="task-detail-actions">
    <v-btn class="dark--text text--lighten-4" text @click="$router.go(-1)">
      Back
    </v-btn>
    <v-btn
      color="warning"
			:to="`/edit/${id}`"
      depressed
    >
      Edit task
    </v-btn>
  </BaseCard>
</template>

<style lang="scss" scoped>
.task-detail-actions {
  display: flex;
  justify-content: end;
  gap: 1rem;
}
</style>
