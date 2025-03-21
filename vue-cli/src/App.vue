<script>
import AddForm from '@/components/AddForm.vue';
import TasksList from '@/components/TasksList.vue';

export default {
  components: {
    // AddForm: AddForm,
    AddForm,
    // 'add-form': AddForm,
    TasksList,
  },
  computed: {
    taskCount() {
      return this.tasks.length;
    },

  },
  data() {
    return {
      tasks: [{
        id: 1,
        title: 'Task1',
        isCompleted: false,
      }],
      // enteredTask: '',
      // isChecked: true,
    }
  },
  methods: {
    addTask() {
      const id = new Date().valueOf();
      const title = '.....';

      const task = this.enteredTask;
      this.tasks.push(task);

      this.enteredTask = ''
    },
    // deleteTask(taskToDelete) {
    //   const indexToDelete = this.tasks.indexOf(taskToDelete);
    //   this.tasks.splice(indexToDelete, 1);
    // }
  },
}
</script>

<template>
  <!-- Extract as a separate component -->
  <h1>Total tasks count is: {{ taskCount }}</h1>

  <add-form :addTask="addTask"></add-form>
<!--  <label for="task">Task Title</label>
  <input type="text" id="task" v-model="enteredTask" />
  <button v-on:click="addTask">Add Task</button>

  <p v-bind:class="{ hidden: taskCount > 0 }">Please enter at least one TODO task</p>-->
  <tasks-list :tasks="tasks"></tasks-list>
<!--  <ul v-bind:class="{ hidden: taskCount === 0 }">
    <li v-for="(task, index) in tasks" v-bind:key="task">
      <span>{{ task }}</span>
      <button v-on:click="deleteTask(task)" v-bind:class="{active: index === 0}">Delete</button>
    </li>
  </ul>-->
<!--  <add-form></add-form>-->
</template>

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
