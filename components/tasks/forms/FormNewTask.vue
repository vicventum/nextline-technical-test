<script>
import { mapGetters, mapActions } from 'vuex'
import InputListTask from '@/components/tasks/forms/InputListTask.vue'
import FormActions from '@/components/tasks/forms/FormActions.vue'

export default {
  components: { InputListTask, FormActions },
  data() {
    return {
      taskData: {
        title: '',
        isCompleted: false,
        description: '',
        dueDate: '',
        comments: '',
        tags: [],
        token: '',
      },
    }
  },
  computed: {
    ...mapGetters('task-store', ['creatingTask']),
  },
  methods: {
    ...mapActions('task-store', ['createTask']),
    async createNewTask() {
      const formattedTaskData = {
        title: this.taskData.title,
        is_completed: this.taskData.isCompleted ? '1' : '0',
        description: this.taskData.description,
        due_date: this.taskData.dueDate,
        comments: this.taskData.comments,
        tags: this.getTextValuesAsString(this.taskData.tags),
        token: this.taskData.token,
      }
      await this.createTask(formattedTaskData)

      // this.$router.push('/')
    },
    getTextValuesAsString(array) {
      return array.map((item) => item.text).join(', ')
    },
  },
}
</script>

<template>
  <v-form class="form" @submit.prevent="createNewTask">
    <BaseCard class="mb-6">
      <InputListTask v-model="taskData" />
    </BaseCard>
    <FormActions
      primary-button-text="Create task"
      :is-loading="creatingTask.isLoading"
    />
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
