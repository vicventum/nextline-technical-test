<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      taskData: this.value,
      colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
      items: [{ header: 'Select an option or create one' }],
      nonce: 1,
      model: this.value?.tags,
      // model: ['a','b','c'],
      search: null,
    }
  },

  watch: {
    // value(newValue, oldValue) {
    //   this.taskData.tags = newValue
    // },
    model: {
      handler(newValue, oldValue) {
        if (newValue.length === oldValue?.length) return
  
        this.model = newValue.map((v) => {
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
        this.taskData.tags = this.model
      },
      immediate: true,
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
    <template #no-data>
      <v-list-item>
        <span class="subheading mr-2">Create </span>
        <v-chip :color="`${colors[nonce - 1]} lighten-3`" label small>
          {{ search }}
        </v-chip>
      </v-list-item>
    </template>
    <template #selection="{ attrs, item, parent, selected }">
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
    <template #item="{ item }">
      <v-chip :color="`${item.color} lighten-3`" dark label small>
        {{ item.text }}
      </v-chip>
    </template>
  </v-combobox>
</template>

<style lang="scss" scoped></style>
