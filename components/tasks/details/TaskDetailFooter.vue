<script>
import BarButtonsAction from '@/components/shared/BarButtonsAction.vue'

export default {
  components: {
    BarButtonsAction,
  },
  props: {
    id: {
      type: Number,
      default: 0,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
}
</script>

<template>
  <BarButtonsAction>
    <v-btn
      color="warning"
      :to="`/edit/${id}`"
      :loading="isLoading"
      :disabled="isLoading"
      depressed
    >
      Edit task
    </v-btn>
  </BarButtonsAction>
</template>

<style lang="scss" scoped></style>
