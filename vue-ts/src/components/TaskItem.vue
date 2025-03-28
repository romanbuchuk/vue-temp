<script setup lang="ts">
import ActionButton from '@/components/ActionButton.vue';

import { inject } from 'vue';
import type {TDeleteTask, TTask} from "@/types/types.ts";

// type TProps = Omit<TTask, 'isCompleted'>

// defineProps<TProps>();
defineProps<TTask>();

const deleteItem = inject<TDeleteTask>('deleteItem');

const deleteTask = (id: number) => () => {
  deleteItem?.(id);
}

</script>

<template>
  <li class="container">
    <div>
      <span class="title">{{ title }}</span>
      <span class="description">{{ shortDescription }}</span>
    </div>
    <ActionButton  :actionclick="deleteTask(id)" scope="delete">Delete</ActionButton>
  </li>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;

    padding: 0.5rem 1rem;
    background-color: #f2f2f2;
    border: 1px solid #c6c6c6;
    border-radius: 1.5rem;
  }
  .description {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .container.completed {
    background-color: #e6ffe6;
  }

  .container .title {
    font-size: 1.4rem;
    font-weight: 600;

    color: #353535;
  }

  .container.completed .title {
    color: #05776f;
  }
</style>