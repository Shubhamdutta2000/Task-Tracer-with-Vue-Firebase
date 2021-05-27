<template>
  <div>
    <div v-if="showForm">
      <!-- add-task event listener -->
      <AddTask @add-task="addTask" />
    </div>
    <!-- Delete & Toggle Reminder Task event listener -->
    <Tasks
      @reminder-toggle="reminderToggle"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} from "../services/TaskDataServices";

export default {
  name: "Home",
  components: {
    Tasks,
    AddTask,
  },
  props: {
    showForm: Boolean,
  },

  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    // fetch all tasks
    async fetchTasks() {
      const data = await getAllTasks();
      return data;
    },

    // fetch particular task by id
    async fetchTask(id) {
      const data = await getTaskById(id);
      return data;
    },

    // add task
    async addTask(task) {
      await addTask(task);
      // add task to local data tasks array
      this.tasks = await this.fetchTasks();
    },

    // delete task
    async deleteTask(id) {
      if (confirm("Are You Sure To delete this?")) {
        const deleted = await deleteTask(id);
        // delete data from local tasks data
        deleted
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : null;
      }
    },

    // toggle reminder task
    async reminderToggle(id) {
      // fetch id task
      const task = await getTaskById(id);
      const updatedTask = { ...task, reminder: !task.reminder };

      // update task
      const data = await updateTask(id, updatedTask);

      // update task in tasks local data
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
  },

  // after component loads
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
