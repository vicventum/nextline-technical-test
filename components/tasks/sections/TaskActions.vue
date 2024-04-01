<script>
import BaseCard from '@/components/base/BaseCard.vue'
export default {
  name: 'TaskActions',
  components: { BaseCard },
  emits: ['change-alpha-order', 'change-created-date-order'],
  data() {
    return {
      isAlphaAscending: true,
      isCreatedDateAscending: true,
    }
  },
  methods: {
    changeAlphaOrder() {
      this.isAlphaAscending = !this.isAlphaAscending
      this.$emit('change-alpha-order', this.isAlphaAscending)
    },
    changeCreatedDateOrder() {
      this.isCreatedDateAscending = !this.isCreatedDateAscending
      this.$emit('change-created-date-order', this.isCreatedDateAscending)
    },
  },
}
</script>

<template>
  <BaseCard class="actions">
    <v-btn color="primary" to="/new" depressed> New task </v-btn>

    <v-spacer />

    <v-divider class="mr-6" vertical />

    <div class="actions__icons">
      <v-btn v-if="isAlphaAscending" icon @click="changeAlphaOrder">
        <v-icon>mdi-order-alphabetical-ascending</v-icon>
      </v-btn>
      <v-btn v-else icon @click="changeAlphaOrder">
        <v-icon>mdi-order-alphabetical-descending</v-icon>
      </v-btn>
      <v-btn v-if="isCreatedDateAscending" icon @click="changeCreatedDateOrder">
        <v-icon>mdi-sort-calendar-ascending</v-icon>
      </v-btn>
      <v-btn v-else icon @click="changeCreatedDateOrder">
        <v-icon>mdi-sort-calendar-descending</v-icon>
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
