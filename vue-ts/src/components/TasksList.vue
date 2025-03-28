<script setup lang="ts">
import TaskItem from './TaskItem.vue';
import type {TTask} from "@/types/types.ts";

defineProps<{ tasks: TTask[] }>();

</script>

<template>
  <ul :class="{ hidden: tasks.length === 0 }">
    <TaskItem v-for="task in tasks" :key="task.id" :title="task.title" :id="task.id" :is-completed="task.isCompleted" :short-description="task.shortDescription" />
  </ul>
</template>

<style scoped>
  .hidden {
    visibility: hidden;
  }

  ul {
    list-style-type: none;
  }
</style>