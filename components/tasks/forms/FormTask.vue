<script>
import BaseCard from '@/components/base/BaseCard.vue'
import InputListTask from '@/components/tasks/forms/InputListTask.vue'
import BarButtonsAction from '@/components/shared/BarButtonsAction.vue'

export default {
  components: { InputListTask, BaseCard, BarButtonsAction },
  props: {
    taskData: {
      type: Object,
      default: () => ({
        id: '',
        title: '',
        isCompleted: false,
        dueDate: '',
        description: '',
        tags: [],
        token: '',
        createdAt: '',
        updatedAt: '',
      }),
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    submitButtonText: {
      type: String,
      default: 'Submit',
    },
  },
  emits: ['submit'],
  data() {
    return {
      data: {},
    }
  },
  watch: {
    taskData: {
      handler(newTaskData) {
        this.data = { ...newTaskData }
      },
      immediate: true,
    },
  },
  methods: {
    async submit() {
      const formattedData = {
        title: this.data.title,
        is_completed: this.data.isCompleted ? '1' : '0',
        description: this.data.description,
        due_date: this.data.dueDate,
        comments: this.data.comments,
        tags: this.getTextValuesAsString(this.data.tags),
        token: this.data.token,
      }
      await this.$emit('submit', formattedData)

      // this.$router.push('/')
    },
    getTextValuesAsString(array) {
      return array.map((item) => item.text).join(', ')
    },
  },
}
</script>

<template>
  <v-form class="form" @submit.prevent="submit">
    <BaseCard class="mb-6">
      <InputListTask v-model="data" />
    </BaseCard>

    <BarButtonsAction>
      <v-btn
        color="success"
        type="submit"
        :loading="isLoading"
        :disabled="isLoading"
        depressed
      >
        {{ submitButtonText }}
      </v-btn>
    </BarButtonsAction>
  </v-form>
</template>

<style lang="scss" scoped>
.form {
  &__actions {
    display: flex;
    justify-content: end;
  }
}
</style>
