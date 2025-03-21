<script>
import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },
  props: ['tasks'],
}
</script>

<template>
  <ul :class="{ hidden: tasks.length === 0 }">
    <task-item v-for="task in tasks" :key="task.id" :title="task.title" :id="task.id" :is-completed="task.isCompleted"></task-item>
  </ul>
</template>

<style scoped>
.hidden {
  visibility: hidden;
}
</style>