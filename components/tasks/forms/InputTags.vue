<script>
import { COLORS } from '@/utils'

export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      colors: COLORS,
      items: [{ header: 'Select an option or create one' }],
      nonce: 1,
      search: null,
    }
  },
  computed: {
    tags: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  watch: {
    tags: {
      handler(newValue, oldValue) {
        if (newValue?.length === oldValue?.length) return null
        console.log('🚀 ~ handler ~ newValue:', newValue)

        this.tags = newValue.map((v) => {
          if (typeof v === 'string') {
            v = {
              text: v,
              color: this.colors[this.nonce - 1],
            }
            console.log(
              '🚀 ~ this.tags=newValue.map ~ this.colors[this.nonce - 1]:',
              this.colors,
              this.nonce,
              this.colors[this.nonce - 1]
            )

            this.items.push(v)

            this.nonce++
          }

          return v
        })
      },
      immediate: false,
    },
  },
}
</script>

<template>
  <v-combobox
    v-model="tags"
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
        <v-chip :color="`${colors[nonce - 1]}`" label small dark>
          {{ search }}
        </v-chip>
      </v-list-item>
    </template>
    <template #selection="{ attrs, item, parent, selected }">
      <v-chip
        v-if="item === Object(item)"
        v-bind="attrs"
        :color="`${item.color}`"
        :input-value="selected"
        label
        small
        dark
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
