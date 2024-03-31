<script>
export default {}
</script>

<template>
  <BaseCard class="bar-actions">
    <v-btn class="dark--text text--lighten-4" text @click="$router.go(-1)">
      Back
    </v-btn>
    <div>
      <slot />
    </div>
  </BaseCard>
</template>

<style lang="scss" scoped>
.bar-actions {
  display: flex;
  justify-content: end;
  gap: 1rem;
}
</style>
