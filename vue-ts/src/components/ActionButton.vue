<script setup lang="ts">
  const props = defineProps<{
    actionClick: () => void;
    scope?: string;
    isDisabled?: boolean;
  }>();

  const handleClick = () => {
    if (props.isDisabled) {
      return;
    }

    props.actionClick();
  }
</script>

<template>
  <button class="button" :class="scope" @click="handleClick" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button {
    background: #6c24ef;
    color: white;

    font-size: 1.4rem;

    padding: .5rem 1rem;
    border: none;
    border-radius: 1rem;
    width: 15rem;

    align-self: flex-end;
  }
  .button.delete {
    background: #cd0060;
  }
  .button:disabled {
    background: #dadada;
    cursor: not-allowed;
  }
</style>