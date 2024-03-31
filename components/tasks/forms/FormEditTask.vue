<script>
import { mapGetters, mapActions } from 'vuex'
import BaseCard from '@/components/base/BaseCard.vue'
import InputListTask from '@/components/tasks/forms/InputListTask.vue'
import BarButtonsAction from '@/components/shared/BarButtonsAction.vue'

export default {
  components: { InputListTask, BaseCard, BarButtonsAction },
  data() {
    return {
      taskId: '',
      taskData: {
        id: '',
        title: '',
        isCompleted: false,
        dueDate: '',
        description: '',
        tags: [],
        token: '',
        createdAt: '',
        updatedAt: '',
      },
    }
  },
  async fetch() {
    this.taskId = this.$route.params.id
    this.taskData = { ...(await this.getTask(this.taskId)) }
  },
  computed: {
    ...mapGetters('task-store', ['task', 'editingTask']),
  },
  methods: {
    ...mapActions('task-store', ['getTask', 'editTask']),
    async editCurrentTask() {
      const formattedTaskData = {
        title: this.taskData.title,
        is_completed: this.taskData.isCompleted ? '1' : '0',
        description: this.taskData.description,
        due_date: this.taskData.dueDate,
        comments: this.taskData.comments,
        tags: this.getTextValuesAsString(this.taskData.tags),
        token: this.taskData.token,
      }
      await this.editTask({ taskId: this.taskId, newData: formattedTaskData })

      // this.$router.push('/')
    },
    getTextValuesAsString(array) {
      return array.map((item) => item.text).join(', ')
    },
  },
}
</script>

<template>
  <v-form class="form" @submit.prevent="editCurrentTask">
    <BaseCard class="mb-6">
      <InputListTask v-model="taskData" />
    </BaseCard>
    
    <BarButtonsAction>
      <v-btn
      color="success"
      type="submit"
      :loading="editingTask.isLoading"
      :disabled="editingTask.isLoading"
      depressed
    >
      Edit task
    </v-btn>
  </BarButtonsAction>
  </v-form>
</template>

<style lang="scss" scoped></style>
