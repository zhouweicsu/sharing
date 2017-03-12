theme: material
transition: slide

---

# ![title](content/imgs/vue-logo.png)

# Vue.js 源码分析(一)
### 响应式原理简介

---

#### <<- zhouweicsu@奇舞团 ->>
#### <<++++ [:fa-github:](https://github.com/zhouweicsu) ->>


---

## 目录

* 基础知识
* 源码阅读
* 断点查看源码过程

---

## 基础知识

* Object.defineProperty()
* 观察者模式
* Watcher、Dep、Observer
* Vue 生命周期


---

### Object.defineProperty()

<p style="font-size: 18px; padding-top: 20px;">Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者<span  style="color: #8BC34A;">修改一个已经存在的属性</span>，并返回这个对象。</p>

configurable、enumerable、value、writable

<p style="color: #FF5722">get、set</p>

vue 的双向绑定核心就是这个 get 和 set，在初始化数据时对数据进行劫持，在 get 和 set 里面做了一些操作。我们先看一下一个简单的实例，然后再看一下 vue 源码里面这一段。

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

---

### Object.defineProperty() 实例

<iframe height='321' width="800" scrolling='no' title='BWaGPo' src='//codepen.io/zhouweicsu/embed/BWaGPo/?height=321&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='http://codepen.io/zhouweicsu/pen/BWaGPo/'>BWaGPo</a> by zhouwei (<a href='http://codepen.io/zhouweicsu'>@zhouweicsu</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


---

观察者模式（订阅者模式）

* 对象间的一对多的模式
* 每当主题对象状态发生改变时，其相关依赖对象都会得到通知，并被自动更新
* 三个对象：发布者、主题对象、订阅者

## ![Observer Pattern](content/imgs/observer-pattern.png)
---

观察者模式实例

<iframe height='365' width="800" scrolling='no' title='peJWaq' src='//codepen.io/zhouweicsu/embed/peJWaq/?height=365&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='http://codepen.io/zhouweicsu/pen/peJWaq/'>peJWaq</a> by zhouwei (<a href='http://codepen.io/zhouweicsu'>@zhouweicsu</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## 生命周期

# ![生命周期](content/imgs/vue-lifecycle.png)

Attention: 官网的生命周期图与最新的 vue 代码不符

---

## 响应式原理简介

# ![响应式原理图](content/imgs/vue-reactivity.png)

---

##  源码阅读

* 生命周期
* initState
* initData
* Observer
* defineReactive
* 依赖收集
* Watcher
* Dep

---

我们再跟着一个简单实例，看一下代码的运行过程

---

## 总结

# ![响应式原理图](content/imgs/vue-reactive.jpg)

* 传入的 data 会转换为 Observer 对象，里面的对象会被递归转换，核心方法是 defineProperty；
* 每个 Observer 对象会有一个 dep 用来收集依赖；
* 依赖收集是通过 defineProperty 中的 get 函数结合全局变量 Dep.target 进行的；

---

## Q&A

## :fa-comments:





