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
</template>

<style lang="scss" scoped></style>
