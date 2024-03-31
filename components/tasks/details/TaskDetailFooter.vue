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
  },
}
</script>

<template>
  <BarButtonsAction>
    <v-btn color="warning" :to="`/edit/${id}`" depressed> Edit task </v-btn>
  </BarButtonsAction>
</template>

<style lang="scss" scoped></style>
