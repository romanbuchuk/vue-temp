<script setup lang="ts">
import TasksList from '@/components/TasksList.vue';
import {type TDeleteTask, type TTask} from "@/types/types.ts";
import { ref, provide } from "vue";

let tasks = ref<TTask[]>([]);

const deleteItem: TDeleteTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
}

provide<TDeleteTask>('deleteItem', deleteItem);

</script>

<template>
  <h1 class="header">Total tasks count is: {{ tasks.length }}</h1>
  <div class="container">
    <TasksList :tasks="tasks" />
    <RouterView />
  </div>
</template>

<style scoped>
  .header {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .container {
    padding: 2rem;
  }
</style>

