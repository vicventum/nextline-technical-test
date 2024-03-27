<script>
export default {
  name: 'TaskActions',
}
</script>

<template>
  <BaseCard class="actions">
    <v-btn color="primary" depressed> New task </v-btn>

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
