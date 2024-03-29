<script>
import BaseCard from '@/components/base/BaseCard.vue'

export default {
  components: { BaseCard },
  props: {
    description: {
      type: String,
      default: '',
      required: true,
    },
    comments: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<template>
  <BaseCard class="task-content">
    <h2 class="text-h6 dark--text text--lighten-3 mb-4">Description</h2>
    <p>{{ description }}</p>

    <v-divider class="my-5" />

    <h2 class="text-h6 dark--text text--lighten-3 mb-4">Comments</h2>
    <p>{{ comments }}</p>
  </BaseCard>
</template>

<style lang="scss" scoped>
.task-metadata {
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
}
</style>
