<script>
export default {
  props: {
    // Variable para almacenar el valor implícito del `v-model`
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      obj: this.value,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu: false,
    }
  },

  watch: {
    value(newValue, oldValue) {
      this.obj = newValue
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.obj.date = val
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
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
        v-model="dateFormatted"
        label="Date"
        hint="MM/DD/YYYY format"
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        @blur="date = parseDate(dateFormatted)"
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="date"
      no-title
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>

<style lang="scss" scoped></style>
