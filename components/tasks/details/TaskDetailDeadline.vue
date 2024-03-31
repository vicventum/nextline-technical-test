<script>
export default {
  name: 'TaskDetailDeadline',
  props: {
    isCompleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    dueDate: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>

<template>
  <div class="task-deadline">
    <template v-if="isCompleted">
      <v-icon v-if="smAndDown" color="success">
        mdi-checkbox-marked-circle
      </v-icon>
      <v-chip v-else color="success darken-1" text-color="white" small>
        <v-avatar left>
          <v-icon small> mdi-checkbox-marked-circle </v-icon>
        </v-avatar>
        <span>Completed</span>
      </v-chip>
    </template>
    <template v-else>
			<v-icon v-if="smAndDown" color="warning"> mdi-alert-circle </v-icon>
			<v-chip v-else color="warning" text-color="white" small>
				<v-avatar left>
					<v-icon small>mdi-alert-circle</v-icon>
				</v-avatar>
				<span>Pending</span>
			</v-chip>
		</template>

    <template v-if="dueDate" >
			<v-divider vertical />
			<span class="text-body-2 light--text text--darken-4">
				Deadline: {{ dueDate }}
			</span>
		</template>
  </div>
</template>

<style lang="scss" scoped>
.task-deadline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
</style>
