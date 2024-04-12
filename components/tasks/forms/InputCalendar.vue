<script>
export default {
  props: {
    // Variable para almacenar el valor implícito del `v-model`
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    dueDate: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },

  watch: {
    dueDate: {
      handler(newValue) {
        this.dueDate = newValue
      },
      immediate: false,
    },
  },
}
</script>

<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="dueDate"
        label="Date"
        hint="YYYY-MM-DD format"
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        @blur="dueDate = dueDate"
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="dueDate"
      no-title
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>

<style lang="scss" scoped></style>
