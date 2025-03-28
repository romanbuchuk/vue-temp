<script lang="ts" setup>
import ActionButton from '@/components/ActionButton.vue';

import { watch, reactive, ref } from 'vue';

const isDisabled = ref(true);

const title = defineModel<string>('title');
const shortDescription = defineModel<string>('shortDescription');
const longDescription = defineModel<string>('longDescription');

const task = reactive({
  title,
  shortDescription,
  longDescription,
});

watch(task, (newTask) => {
  isDisabled.value = !(newTask.title && newTask.shortDescription && newTask.longDescription);
});

function add() {
  fetch('https://todo-list-uzhnu-default-rtdb.firebaseio.com/tasks.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      isCompleted: false,
      ...task,
    }),
  }).then(res => {
    if (res.ok) {
      title.value = '';
      shortDescription.value = '';
      longDescription.value = '';
    }
  });
}

</script>

<template>
  <div class="form-container">
    <div>
      <label for="task">Task Title</label>
      <input type="text" id="task" v-model="title" placeholder="title..." />
    </div>
    <div>
      <label for="short-description">Short description</label>
      <input type="text" id="short-description" v-model="shortDescription" placeholder="description..." />
    </div>
    <div>
      <label for="long-description">Long description</label>
      <textarea type="text" id="long-description" v-model="longDescription" placeholder="long description..." />
    </div>
    <ActionButton class="button add-btn" id="add-btn" :action-click="add" :is-disabled="isDisabled">Add Task</ActionButton>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  width: 50rem;

  background-color: #faf1f1;
  box-shadow: 7px 4px 9px 2px rgba(0, 0, 0, 0.2);
}

label, input {
  margin-bottom: 0.5rem;
  width: 100%;
}

label {
  font-weight: bold;
  display: inline-block;
}

textarea {
  width: 100%;
  max-width: 50rem;
  min-height: 5rem;
}

input, textarea {
  display: block;
  padding: 0.5rem 1rem;
}
</style>
