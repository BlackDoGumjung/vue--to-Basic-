<template>
<h4>{{ title }}</h4>
  <button @click="count++">당신은 {{ count }} 번 클릭했습니다.</button>
  <button @click=$emit('enlarge-text')>text size up!</button>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style></style>
