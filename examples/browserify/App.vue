<template>
  <div id="app">
    <img src="https://vuejs.org/images/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="css" scoped>
#app {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  padding-top: 5vh;
  padding-bottom: 10vh;
  width: 10rem;
  height: auto;
}
</style>
