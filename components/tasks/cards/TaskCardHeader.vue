<script>
export default {}
</script>

<template>
  <header class="task-header">
    <div class="task-header__content">
      <v-chip color="success darken-1" text-color="white" small>
        <v-avatar left>
          <v-icon small>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        Completed
      </v-chip>

      <h2 class="text-h6">Terminar de leer los Juego del Hambre</h2>

      <!-- <span class="text-body-2 light--text text--darken-4"> 26/03/2024 </span> -->
    </div>
    <v-btn icon color="error lighten-1">
      <v-icon>mdi-trash-can-outline</v-icon>
    </v-btn>
  </header>
</template>

<style lang="scss" scoped>
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &__content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>
