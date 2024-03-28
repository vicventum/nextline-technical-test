<script>
export default {
  data: () => ({
    colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
    items: [
      { header: 'Select an option or create one' },
      // {
      //   text: 'Foo',
      //   color: 'blue',
      // },
      // {
      //   text: 'Bar',
      //   color: 'red',
      // },
    ],
    nonce: 1,
    model: [
      // {
      //   text: 'Foo',
      //   color: 'blue',
      // },
    ],
    search: null,
  }),

  watch: {
    model(val, prev) {
      if (val.length === prev.length) return

      this.model = val.map((v) => {
        if (typeof v === 'string') {
          v = {
            text: v,
            color: this.colors[this.nonce - 1],
          }

          this.items.push(v)

          this.nonce++
        }

        return v
      })
    },
  },
}
</script>

<template>
  <v-combobox
    v-model="model"
    :hide-no-data="!search"
    :items="items"
    :search-input.sync="search"
    hide-selected
    label="Search for an option"
    multiple
    small-chips
		flat
  >
    <template v-slot:no-data>
      <v-list-item>
        <span class="subheading mr-2">Create </span>
        <v-chip :color="`${colors[nonce - 1]} lighten-3`" label small>
          {{ search }}
        </v-chip>
      </v-list-item>
    </template>
    <template v-slot:selection="{ attrs, item, parent, selected }">
      <v-chip
        v-if="item === Object(item)"
        v-bind="attrs"
        :color="`${item.color} lighten-3`"
        :input-value="selected"
        label
        small
      >
        <span class="pr-2">
          {{ item.text }}
        </span>
        <v-icon small @click="parent.selectItem(item)"> $delete </v-icon>
      </v-chip>
    </template>
    <template v-slot:item="{ item }">
      <v-chip :color="`${item.color} lighten-3`" dark label small>
        {{ item.text }}
      </v-chip>
    </template>
  </v-combobox>
</template>

<style lang="scss" scoped></style>
