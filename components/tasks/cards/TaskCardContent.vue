<script>
export default {
  props: {
    descripction: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<template>
  <div class="task-content">
    <p class="task-content__text">
      {{ descripction }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.task-content {
  width: 92%;
  &__text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
