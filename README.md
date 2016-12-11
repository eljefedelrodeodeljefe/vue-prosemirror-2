# vue-prosemirror-2

Plugin to integrate prosemirror with Vue 2

[![Build Status](https://travis-ci.org/eljefedelrodeodeljefe/vue-prosemirror-2.svg?branch=master)](https://travis-ci.org/eljefedelrodeodeljefe/vue-prosemirror-2)

## Usage

```js
import Vue from 'vue'
import ProseMirror from 'vue-prosemirror-2'
import App from './App.vue'

Vue.use(ProseMirror)

new Vue({ // eslint-disable-line no-new,
  el: '#app',
  render: (h) => h(App)
})
```
This installs the component, which can be used as...

```html
<prosemirror mode="all"></prosemirror>
```

| parameter        | values                                                                          |
|------------------|---------------------------------------------------------------------------------|
| `mode`           | `all`, `editor`, `markdown`                                                     |
| `initial-markdown` | binding `:initial-markdown="someVar"`, as string: `initial-markdown="**text**"` |


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).
