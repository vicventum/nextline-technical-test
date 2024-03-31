<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<template>
  <div class="task-metadata-footer">
    <div class="task-metadata-footer__tags">
      <v-chip
        v-for="tag in tags"
        :key="tag.text"
        :color="tag.color"
        label
        outlined
        small
        dark
      >
        {{ tag.text }}
      </v-chip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-metadata-footer {
  &__tags {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
