<template>
  <main class="main">
    <div ref="counter_container" />
    <button class="reset-button" @click="handleClickReset">Reset</button>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Counter from 'svelte-component-ts/Counter.svelte'

type Data = {
  counter: Counter | null;
}

const INITIAL_COUNT = 3;

export default Vue.extend({
  name: 'IndexPage',
  data(): Data {
    return {
      counter: null
    }
  },
  mounted() {
    if (this.$refs.counter_container == null) return;

    this.counter = new Counter({
      target: this.$refs.counter_container as Element,
      props: {
        initial: INITIAL_COUNT,
      }
    });
  },
  beforeDestroy() {
    this.counter?.$destroy();
  },
  methods: {
    handleClickReset() {
      this.counter?.reset();
    }
  }
})
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
}

.reset-button {
  margin-top: 10px;
}
</style>
