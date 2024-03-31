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
      taskData: this.value,
      titleRules: [(v) => !!v || 'Title is required'],
      // isCompletedRules: [(v) => !!v || 'Completed is required'],
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.taskData = newValue
    },
  },
}
</script>

<template>
  <div class="input-list">
    <v-text-field
      v-model="taskData.title"
      :rules="titleRules"
      label="Title"
      required
    />
    <v-textarea v-model="taskData.description" label="Description" rows="4" />
    <v-textarea v-model="taskData.comments" label="Comments" rows="3" />

    <div class="input-list__details">
      <v-checkbox v-model="taskData.isCompleted" label="Complete" />
      <InputCalendar v-model="taskData.dueDate" />
      <InputTags v-model="taskData.tags" />
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
