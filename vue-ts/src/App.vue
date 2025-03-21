<script setup lang="ts">
import AddForm from '@/components/AddForm.vue';
import TasksList from '@/components/TasksList.vue';
import {type TAddTask, type TTask} from "@/types/types.ts";
import { reactive } from "vue";

// const emits = defineEmits<{
//   (event: 'addTask', task: string): void;
// }>();
// const emits = defineEmits<{ addTask: [t: string] }>();
// const emits = defineEmits<{ addTask: [t: number] }>();

const tasks = reactive<TTask[]>([{
  id: 1,
  title: 'Task 1',
  isCompleted: false,
}]);
const addTask: TAddTask = (taskTitle) => {
  const task: TTask = {
    id: new Date().valueOf(),
    title: taskTitle ?? '',
    isCompleted: false,
  };

  // emits('addTask', 'sdfdsf');
  // emits('addTask', 1234);

  tasks.push(task);
};

// data ->
// emits -> defineEmits
// props -> defineProps
// refs
// slots -> useSlot

// export default {
//   components: {
//     AddForm,
//   },
//   setup(props, context) {
//     console.log(context);
//     console.log(props);
//
//     return {
//       tasks,
//       addTask,
//     }
//   },
//   emits: ['addTask'],
//   methods: {
//     fancy() {
//       this.$emit('addTask');
//     }
//   }
// }

</script>

<template>
  <h1>Total tasks count is: {{ tasks.length }}</h1>
  <AddForm :addTask="addTask" />
  <TasksList :tasks="tasks" />
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }

  <style>
   * {
     margin: 0;
     padding: 0;

     box-sizing: border-box;
   }

  html {
    font-size: 10px;
  }

  #root {
    margin: 15rem auto;
    max-width: 800px;
    padding: 1rem;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  h1 {
    font-weight: 700;
  }

  ul {
    list-style: none;
    margin: 1rem 0.5rem;
  }

  li {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #838383;
  }

  button {
    margin-left: 1rem;
    border: 1px solid #838383;
  }
  button.active {
    background-color: #f3abab;
  }
</style>

