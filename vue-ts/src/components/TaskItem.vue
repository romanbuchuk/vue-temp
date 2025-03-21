<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<template>
  <li>
    <span>{{ title }}</span>
    <span>{{ id }}</span>
    <span>{{ isCompleted }}</span>
<!--    <button @click="deleteTask(task)" v-bind:class="{active: index === 0}">Delete</button>-->
    <button>Delete</button>
  </li>
</template>

<style>

</style>