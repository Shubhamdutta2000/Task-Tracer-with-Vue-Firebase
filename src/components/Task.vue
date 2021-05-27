<template>
  <!-- 
    add class for reminder task 
    Emit reminder task custom event on dbclick
  -->
  <div
    @dblclick="$emit('reminder-toggle', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <div class="content">
      <h3>{{ task.text }}</h3>
      <!-- emit delete task custom event -->
      <p>{{ task.day }}</p>
    </div>
    <i @click="$emit('delete-task', task.id)" class="fas fa-trash-alt"></i>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>

<style scope>
.fas {
  color: red;
  width: 6%;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.task .content {
  width: 94%;
}
.task.reminder {
  border-left: 10px solid #0078d7;
}
.task h3 {
  color: rgb(0, 0, 177);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task p {
  color: #005eac;
}
</style>
