<script>
import { mapGetters, mapActions } from 'vuex'
import InputListTask from '@/components/tasks/forms/InputListTask.vue'

export default {
  components: { InputListTask },
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
    <BaseCard class="form__actions">
      <v-btn
        color="success"
        type="submit"
        :loading="creatingTask.isLoading"
        :disabled="creatingTask.isLoading"
        depressed
      >
        Create task
      </v-btn>
    </BaseCard>
    <p v-if="creatingTask.isError">Error creating task</p>
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
