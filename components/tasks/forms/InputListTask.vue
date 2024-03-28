<script>
import InputTags from '@/components/tasks/forms/InputTags.vue'
import InputCalendar from '@/components/tasks/forms/InputCalendar.vue'

export default {
  components: { InputTags, InputCalendar },
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
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.obj = newValue
      // this.$emit('input', newValue)
      // this.$emit('close', false)
    },
  },
}
</script>

<template>
  <div class="input-list">
    <v-text-field label="Title" />
    <v-textarea name="description" label="Description" value="" rows="4" />
    <v-textarea name="comments" label="Comments" value="" rows="3" />

    <div class="input-list__details">
      <v-checkbox v-model="obj.check" label="Complete" />
      <InputCalendar v-model="obj" />
      <InputTags />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-list {
  display: grid;
  gap: 0.5rem;

  &__details {
    display: grid;
    grid-template-columns: auto auto 60%;
    align-items: flex-end;
    gap: 1rem;
  }
}
</style>
