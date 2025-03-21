<script lang="ts" setup>

import type {TAddTask} from "@/types/types.ts";

const enteredTaskTitle = defineModel<string>('enteredTaskTitle');
defineProps<{
  addTask: TAddTask
}>();


</script>

<template>
  <label for="task">Task Title</label>
  <input type="text" id="task" v-model="enteredTaskTitle"/>
  <button @click="addTask(enteredTaskTitle)">Add Task</button>
</template>

<style>
label, input {
  margin-bottom: 0.5rem;
  width: 100%;
}

label {
  font-weight: bold;
  display: inline-block;
}

input {
  display: block;
}
</style>