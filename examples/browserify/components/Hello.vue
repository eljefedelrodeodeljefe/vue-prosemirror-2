<template lang="html">
  <section>
    <el-select v-model="mode" placeholder="Select">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <prosemirror :mode="mode"></prosemirror>
    <br>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="parameter"
        label="Parameter"
        width="180">
      </el-table-column>
      <el-table-column
        prop="values"
        label="Values">
      </el-table-column>
    </el-table>
  </section>
</template>

<script>

export default {
  data () {
    return {
      tableData: [
        {
          parameter: 'mode',
          values: ['all', 'editor', 'markdown'].join(', ')
        },
        {
          parameter: 'initial-markdown',
          values: `:initial-markdown="someVar", as string: initial-markdown="**text**"`
        }
      ],
      options: [
        {
          value: 'markdown',
          label: 'Markdown'
        },
        {
          value: 'editor',
          label: 'Editor'
        },
        {
          value: 'all',
          label: 'All'
        }
      ],
      mode: 'all'
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
  min-width: 30rem;
  max-width: 50rem;
}

.el-select {
  padding-bottom: 3rem;
}

</style>

<style media="screen">
textarea.vue-prosemirror.markdown,
.vue-prosemirror.editor {
  resize: none;
  border-style: solid;
  border-width: 1px;
  border-color: #8492a6;
  margin-bottom: 1rem;
  border-radius: 4px;
}
</style>
