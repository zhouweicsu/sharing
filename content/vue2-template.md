theme: material
transition: slide

---

# ![title](content/imgs/vue-logo.png)

# Vue.js 源码分析(二)
### 模板渲染简介

---

#### <<- zhouweicsu@奇舞团 ->>
#### <<++++ [:fa-github:](https://github.com/zhouweicsu) ->>


---

## 目录

* 基础概念
* 模板渲染过程
* compile
* diff

---

## 基础概念

* createElement 的问题
* ast 数据结构
* VNode 数据结构
* render function

---
## createElement 的问题

```javascript
let div = document.createElement('div');
for(let k in div) {
	console.log(k);
}
```
如果每次都创建新的元素，会非常影响性能
---

## ast

abstract syntax tree

源码：[ast 数据结构](https://github.com/vuejs/vue/blob/v2.1.10/flow/compiler.js#L63-L142)

---

## VNode

## Vue 2.0 模板渲染过程
![Vue 2.0 模板渲染过程](/content/imgs/vue-template.svg)

---
## compile

* 输入：template / el / render function

* 输出：render & staticRenderFns

---
## Template
```html
<div id="app">
  <header>
    <h1>I'm a template!</h1>
  </header>
  <p v-if="message">
    {{ message }}
  </p>
  <p v-else>
    No message.
  </p>
</div>
```
---
## render

```javascript
(function() {
  with(this){
    return _c('div',{
      attrs:{"id":"app"}
      },[
        _m(0),
        _v(" "),
        (message)
        ?_c('p',[_v("\n    "+_s(message)+"\n  ")])
        :_c('p',[_v("\n    No message.\n  ")])
      ]
    )
  }
})
---

## staticRenderFns

```javascript
(function() {
  with(this){
    return _c('header',[_c('h1',[_v("I'm a template!")])])
  }
})
```

_m(0)

---

## render function 中的函数

flow：[flow/component.js](https://github.com/vuejs/vue/blob/v2.1.10/flow/component.js#L78-L106)

定义：[src/core/instance/render.js](https://github.com/vuejs/vue/blob/v2.1.10/src/core/instance/render.js#L108)

---

## [src/compiler/index.js](https://github.com/vuejs/vue/blob/v2.1.10/src/compiler/index.js)
```javascript
export function compile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  optimize(ast, options)
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}
```
---
## parse

* 采用了 John Resig 的 HTML Parser
* 输入是 template / el / render function
* 输出是 ast 

---
## optimize

* 标记静态子树

---
## generate

* ast --> render function

---

## patch

![Vue 2.0 模板渲染过程](/content/imgs/vue-template.svg)


---
## diff

* 来源于 [snabbdom](https://github.com/snabbdom/snabbdom)
* 只对同一个层级进行对比
* patchVNode
* updateChildren

---
## 对比算法

![](/content/imgs/diff.png)

---

## 总结

![Vue 2.0 模板渲染过程](/content/imgs/vue-template.svg)

---

## Q&A

## :fa-comments:

---

## 扩展阅读

* [简洁清晰的 virtual dom 实现：snabbdom 源码阅读](http://www.jianshu.com/p/b461657e49c0)
* [解析 vue 2.0 的 diff 算法](https://github.com/aooy/blog/issues/2)



