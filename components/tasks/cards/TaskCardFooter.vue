<script>
// const colors = [
//   '#E91E63',
//   '#9C27B0',
//   '#009688',
//   '#FFC107',
//   '#FF7043',
//   '#039BE5',
// ]
export default {}
</script>

<template>
  <footer class="task-footer">
    <div class="task-footer__tags">
      <v-chip color="#E91E63" label outlined small dark>vue</v-chip>
      <v-chip color="#9C27B0" label outlined small dark>nuxt</v-chip>
      <v-chip color="#009688" label outlined small dark>javascript</v-chip>
    </div>

    <!-- <v-divider vertical /> -->

    <span class="text-body-2 light--text text--darken-4"> 26/03/2024 </span>
  </footer>
</template>

<style lang="scss" scoped>
.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &__tags {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
