<template lang="html">
  <section>
    <prosemirror :mode="mode"></prosemirror>
    <button type="button" name="button" @click="mode = 'markdown'">Markdown</button>
    <button type="button" name="button" @click="mode = 'editor'">Editor</button>
    <button type="button" name="button" @click="mode = 'all'">All</button>
  </section>
</template>

<script>

export default {
  data () {
    return {
      mode: 'editor'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>
section {
  max-width: 50rem;
}
</style>
