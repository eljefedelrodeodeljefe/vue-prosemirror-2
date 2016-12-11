import Vue from 'vue'
import ProseMirror from '../../'

describe('Hello.vue', () => {
  it('should render correct contents', () => {

    Vue.use(ProseMirror)
    const vm = new Vue({
      el: document.createElement('div'),
      template: `<prosemirror mode="all"></prosemirror>`
    })
    expect(vm.$el.children.length).toBe(2)
    expect(vm.$el.querySelector('.markdown.vue-prosemirror')).toBeTruthy()
    expect(vm.$el.querySelector('.editor.vue-prosemirror')).toBeTruthy()
  })
})
