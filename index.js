const insertCss = require('insert-css')
const { MenuBarEditorView } = require('prosemirror-menu')
const { EditorState } = require('prosemirror-state')
const { schema, defaultMarkdownParser, defaultMarkdownSerializer } = require('prosemirror-markdown')
const { exampleSetup } = require('prosemirror-example-setup')

const css = `
/* from Prosemirror */
.ProseMirror {
  position: relative;
}

.ProseMirror {
  white-space: pre-wrap;
}

.ProseMirror ul, .ProseMirror ol {
  padding-left: 30px;
  cursor: default;
}

.ProseMirror blockquote {
  padding-left: 1em;
  border-left: 3px solid #eee;
  margin-left: 0; margin-right: 0;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

.ProseMirror li {
  position: relative;
  pointer-events: none; /* Don't do weird stuff with marker clicks */
}
.ProseMirror li > * {
  pointer-events: auto;
}

.ProseMirror-nodeselection *::selection, .ProseMirror-widget *::selection { background: transparent; }
.ProseMirror-nodeselection *::-moz-selection, .ProseMirror-widget *::-moz-selection { background: transparent; }

.ProseMirror-selectednode {
  outline: 2px solid #8cf;
}

/* Make sure li selections wrap around markers */

li.ProseMirror-selectednode {
  outline: none;
}

li.ProseMirror-selectednode:after {
  content: "";
  position: absolute;
  left: -32px;
  right: -2px; top: -2px; bottom: -2px;
  border: 2px solid #8cf;
  pointer-events: none;
}

/* from markdown example */
.ProseMirror {
  height: 120px;
  overflow-y: auto;
  box-sizing: border-box;
  -moz-box-sizing: border-box
}

textarea {
  width: 100%;
  height: 123px;
  border: 1px solid silver;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 3px 10px;
  border-radius: 3px;
  border: 1px solid #38a
}

.ProseMirror-menubar-wrapper, #markdown textarea {
  display: block;
  margin-bottom: 4px
}

/* from menu bar */
.ProseMirror-textblock-dropdown {
  min-width: 3em;
}

.ProseMirror-menu {
  margin: 0 -4px;
  line-height: 1;
}

.ProseMirror-tooltip .ProseMirror-menu {
  width: -webkit-fit-content;
  width: fit-content;
  white-space: pre;
}

.ProseMirror-menuitem {
  margin-right: 3px;
  display: inline-block;
}

.ProseMirror-menuseparator {
  border-right: 1px solid #ddd;
  margin-right: 3px;
}

.ProseMirror-menu-dropdown, .ProseMirror-menu-dropdown-menu {
  font-size: 90%;
  white-space: nowrap;
}

.ProseMirror-menu-dropdown {
  vertical-align: 1px;
  cursor: pointer;
}

.ProseMirror-menu-dropdown-wrap {
  padding: 1px 14px 1px 4px;
  display: inline-block;
  position: relative;
}

.ProseMirror-menu-dropdown:after {
  content: "";
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid currentColor;
  opacity: .6;
  position: absolute;
  right: 2px;
  top: calc(50% - 2px);
}

.ProseMirror-menu-dropdown-menu, .ProseMirror-menu-submenu {
  position: absolute;
  background: white;
  color: #666;
  border: 1px solid #aaa;
  padding: 2px;
}

.ProseMirror-menu-dropdown-menu {
  z-index: 15;
  min-width: 6em;
}

.ProseMirror-menu-dropdown-item {
  cursor: pointer;
  padding: 2px 8px 2px 4px;
}

.ProseMirror-menu-dropdown-item:hover {
  background: #f2f2f2;
}

.ProseMirror-menu-submenu-wrap {
  position: relative;
  margin-right: -4px;
}

.ProseMirror-menu-submenu-label:after {
  content: "";
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid currentColor;
  opacity: .6;
  position: absolute;
  right: 4px;
  top: calc(50% - 4px);
}

.ProseMirror-menu-submenu {
  display: none;
  min-width: 4em;
  left: 100%;
  top: -3px;
}

.ProseMirror-menu-active {
  background: #eee;
  border-radius: 4px;
}

.ProseMirror-menu-active {
  background: #eee;
  border-radius: 4px;
}

.ProseMirror-menu-disabled {
  opacity: .3;
}

.ProseMirror-menu-submenu-wrap:hover .ProseMirror-menu-submenu, .ProseMirror-menu-submenu-wrap-active .ProseMirror-menu-submenu {
  display: block;
}

.ProseMirror-menubar {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  position: relative;
  min-height: 1em;
  color: #666;
  padding: 1px 6px;
  top: 0; left: 0; right: 0;
  border-bottom: 1px solid silver;
  z-index: 10;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow: visible;
}

.ProseMirror-icon {
  display: inline-block;
  line-height: .8;
  vertical-align: -2px; /* Compensate for padding */
  padding: 2px 8px;
  cursor: pointer;
}

.ProseMirror-icon svg {
  fill: currentColor;
  height: 1em;
}

.ProseMirror-icon span {
  vertical-align: text-top;
}


.ProseMirror-prompt {
  background: white;
  padding: 5px 10px 5px 15px;
  border: 1px solid silver;
  position: fixed;
  border-radius: 3px;
  z-index: 11;
  box-shadow: -.5px 2px 5px rgba(0, 0, 0, .2);
}

.ProseMirror-prompt h5 {
  margin: 0;
  font-weight: normal;
  font-size: 100%;
  color: #444;
}

.ProseMirror-prompt input[type="text"],
.ProseMirror-prompt textarea {
  background: #eee;
  border: none;
  outline: none;
}

.ProseMirror-prompt input[type="text"] {
  padding: 0 4px;
}

.ProseMirror-prompt-close {
  position: absolute;
  left: 2px; top: 1px;
  color: #666;
  border: none; background: transparent; padding: 0;
}

.ProseMirror-prompt-close:after {
  content: "âœ•";
  font-size: 12px;
}

.ProseMirror-invalid {
  background: #ffc;
  border: 1px solid #cc7;
  border-radius: 4px;
  padding: 5px 10px;
  position: absolute;
  min-width: 10em;
}

.ProseMirror-prompt-buttons {
  margin-top: 5px;
  display: none;
}

textarea.vue-prosemirror,
.vue-prosemirror div.ProseMirror-content {
  border: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

textarea.vue-prosemirror {
  margin: 0;
  padding: 0;
}
`

exports.install = function (Vue, options) {
  options = Object.assign({
    'css': true
  }, options)

  if (options.css) {
    insertCss(css)
  }

  Vue.component('prosemirror', {
    name: 'prosemirror',
    template: `
      <div v-bind:class="name">
        <div class="editor" v-bind:class="name" v-show="mode === 'editor' || mode ==='all'"></div>
        <textarea class="markdown" v-bind:class="name" v-show="mode === 'markdown' || mode ==='all'" v-model="content.markdown"></textarea>
      </div>`,
    data () {
      return {
        content: {
          markdown: '',
          editor: ''
        },
        editor: {},
        view: {},
        name: 'vue-prosemirror'
      }
    },
    mounted () {
      this.editor = this.$el.children[0]
      // sets up prose mirror. Also
      // bind textarea content changes
      this.setupProseMirror(this.content.editor, this.editor)
      this.bindTextarea(this.$el.children[1])

      // handle private cahnge events:
      //  * editor needs separate handling for inside and outside changes
      //  * markdown change is handled through v-model
      this.$on('_content-change-editor', (action) => {
        this.view.updateState(this.view.editor.state.applyAction(action))
        this.$emit('content-change-editor')
      })

      this.$on('_content-change-markdown', () => {
        if (['all', 'editor'].includes(this.mode)) {
          const state = EditorState.create({
            doc: defaultMarkdownParser.parse(this.content.markdown),
            plugins: exampleSetup({schema})
          })
          this.view.editor.updateState(state)
        }
        this.$emit('content-change-markdown')
      })

      if (this.initialMarkdown) {
        this.content.markdown = this.initialMarkdown
        this.$emit('_content-change-markdown')
      }
    },
    methods: {
      'setupProseMirror': function (content, editor) {
        const self = this

        this.view = new MenuBarEditorView(editor, {
          state: EditorState.create({
            doc: defaultMarkdownParser.parse(content),
            plugins: exampleSetup({schema})
          }),
          onAction: (action) => {
            self.$emit('_content-change-editor', action)
            self.content.editor = this.view.editor.state.doc
            self.content.markdown = defaultMarkdownSerializer.serialize(this.view.editor.state.doc)
          }
        })
        this.view.editor.focus()
      },
      'bindTextarea': function (area) {
        const self = this

        function mtodoc () {
          self.content.editor = defaultMarkdownParser.parse(area.value)
          self.content.markdown = area.value
          self.$emit('_content-change-markdown')
        }
        // emulate v-model
        if (area.addEventListener) {
          area.addEventListener('input', mtodoc, false)
        } else if (area.attachEvent) {
          area.attachEvent('onpropertychange', mtodoc)
        }
      }
    },
    props: {
      'mode': {
        default: 'editor', // 'editor', 'markdown', 'all'
        type: String,
        required: false
      },
      'custom-class': {
        default: 'vue-prosemirror',
        type: String,
        required: false
      },
      'initial-markdown': {
        type: String
      }
    },
    watch: {
      'content': {
        handler: function (val, oldVal) {
          this.$emit('change-content', val, oldVal)
        },
        deep: true
      },
      'mode': function (val, oldVal) {
        // editor doesn't get updated when it isn't visible.
        // Do manually here
        if (oldVal !== 'all' && (val === 'editor' || val === 'all')) {
          const state = EditorState.create({
            doc: defaultMarkdownParser.parse(this.content.markdown),
            plugins: exampleSetup({schema})
          })
          this.view.editor.updateState(state)
        }

        this.$emit('change-mode', val, oldVal)
      }
    }
  })
}
