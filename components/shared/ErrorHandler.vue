<script>
export default {
  props: {
    isError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: 'An error has occurred, please try again or reload the page',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    loadingMessage: {
      type: String,
      default: 'Loading...',
    },
    isEmpty: {
      type: Boolean,
      default: false,
    },
    emptyMessage: {
      type: String,
      default: 'There are no tasks to display. Create one!',
    },
  },
}
</script>

<template>
  <div>
    <template v-if="isError">
      <h2 class="text-center dark--text text--lighten-4 mt-6">
        {{ errorMessage }}
      </h2>
    </template>
    <template v-else-if="isLoading">
      <h2 class="text-center dark--text text--lighten-4 mt-6">
        {{ loadingMessage }}
      </h2>
    </template>
    <template v-else-if="isEmpty">
      <h2 class="text-center dark--text text--lighten-4 mt-6">
        {{ emptyMessage }}
      </h2>
    </template>

    <div v-else>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
