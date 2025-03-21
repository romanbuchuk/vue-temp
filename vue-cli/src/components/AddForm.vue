<script>
export default {
  props: 'addTask',
  data() {
    return {
      enteredTitle: '',
    }
  }
}
</script>

<template>
  <label for="task">Task Title</label>
  <input type="text" id="task" v-model="enteredTitle"/>
  <button @click="addTask">Add Task</button>
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