<script>
import BaseCard from '@/components/base/BaseCard.vue'
export default {
  name: 'TaskActions',
  components: { BaseCard },
}
</script>

<template>
  <BaseCard class="actions">
    <v-btn color="primary" to="/new" depressed> New task </v-btn>

    <v-spacer />

    <v-divider class="mr-6" vertical />

    <div class="actions__icons">
      <v-btn icon>
        <v-icon>mdi-order-alphabetical-ascending</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-order-alphabetical-descending</v-icon>
      </v-btn>
    </div>
  </BaseCard>
</template>

<style lang="scss" scope>
.actions {
  display: flex;

  &__icons {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
