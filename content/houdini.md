theme: material
transition: slide

---

![title](content/imgs/houdini.png)

---

#### <<- zhouweicsu@奇舞团 ->>
#### <<++++ [:fa-github:](https://github.com/zhouweicsu) ->>

---

#### Houdini 是 W3C 新成立的一个任务小组，它的 <span style="color:palegreen;">终极目标</span> 是实现 CSS 属性的完全兼容。



<h1 class="fragment" style="margin-top:8rem;">:fa-chrome: :fa-firefox: :fa-safari:  :fa-edge: :fa-opera:</h1>

---

fragment: true

## 我要使用 CSS 新特性！
*  http://caniuse.com/
*  部分浏览器不支持此特性
*  更糟糕：都支持却表现不一样

---
fragment: true

## 我要使用 JavaScript 新特性！

*  Babel
*  Polyfill

---
fragment: true

## 我要新增一个 CSS 特性！
![新增 CSS 特性](content/imgs/CSS-new-property.png)

---

## 我要新增一个 JavaScript 特性！
![新增 JavaScript 特性](content/imgs/JavaScript-new-property.png)

---

# why?

---

## 浏览器工作原理
![浏览器工作原理](content/imgs/Webkit-work.png)

---

## 我们能控制的部分

![我们能控制的部分](content/imgs/Webkit-control.png)


---

## [The Extensible Web Manifesto](https://extensiblewebmanifesto.org/)

“To enable libraries to do more, browser vendors should provide new low-level capabilities that expose the possibilities of the underlying platform as closely as possible.”


---
fragment: true

## Houdini

* 可扩展的 CSS
* 一系列浏览器底层 API


---

## 浏览器每个阶段与 Houdini API 的对应关系

<div class="houdini-api">
	<img style="top:1rem;left:0;width:60rem" src="content/imgs/Webkit-work.png">
	<img class="fragment" style="top:12.3rem;width:20%;left:7.2rem;" src="content/imgs/properties&values.png">
	<img class="fragment" style="top:8.5rem;width:42%;left:24rem;" src="content/imgs/worklets.png">
	<img class="fragment" style="top:-1rem;width:36%;left:30.4rem;" src="content/imgs/otherapi.png">
</div>

<style>
.houdini-api {width:60rem;height:0;padding-top:50%;position:relative;top:4rem;}
.houdini-api img {position: absolute;}
</style>

---
## Houdini is A set of APIS

* [CSS Parser API 1](https://drafts.css-houdini.org/css-parser-api/)
* [CSS Typed OM 1](https://drafts.css-houdini.org/css-typed-om/) <i>:fa-check:</i>
* [CSS Properties and Values API 1](https://drafts.css-houdini.org/css-properties-values-api/) <i>:fa-check:</i>
* [CSS Layout API 1](https://drafts.css-houdini.org/css-layout-api/)
* [CSS Painting API 1](https://drafts.css-houdini.org/css-paint-api/) <i>:fa-check:</i>
* [Composited Scrolling and Animation](https://drafts.css-houdini.org/composited-scrolling-and-animation/Explainer)
* [Worklets 1](https://drafts.css-houdini.org/worklets/) <i>:fa-check:</i>
* [Box Tree API 1](https://drafts.css-houdini.org/box-tree-api/)
* [Font Metrics API 1](https://drafts.css-houdini.org/font-metrics-api/)

---

<ul class="api-list">
	<li class="current">CSS Parser API 1</li>
	<li class="green">CSS Typed OM 1</li>
	<li class="green">CSS Properties and Values API 1</li>
	<li>CSS Layout API 1</li>
	<li class="green">CSS Painting API 1</li>
	<li>Composited Scrolling And Animation</li>
	<li class="green">Worklets 1</li>
	<li>Box Tree API 1</li>
	<li>Font Metrics API 1</li>
</ul>

<style>
	.api-list li {
		opacity: 0.3;
	}
	.api-list .green {
		color: lightgreen;
	}
	.api-list .current {
		opacity: 1;
	}
</style>

---
fragment: true

## CSS Parser API

* 允许开发者自由扩展 CSS 词法分析器
* 新的媒体规则、新的伪类、嵌套、@extends、@apply

---


<ul class="api-list">
	<li class="">CSS Parser API 1</li>
	<li class="green current">CSS Typed OM 1</li>
	<li class="green">CSS Properties and Values API 1</li>
	<li>CSS Layout API 1</li>
	<li class="green">CSS Painting API 1</li>
	<li>Composited Scrolling And Animation</li>
	<li class="green">Worklets 1</li>
	<li>Box Tree API 1</li>
	<li>Font Metrics API 1</li>
</ul>
---
fragment:true

##  CSS Typed OM

```JavaScript
var height = elem.style.height;    //100px
height = parseInt(height) * 2;     //200
elem.style.height = height + 'px'; //200px
```

<pre style="text-align:center"><code>
字符串 -> 数字 -> 字符串 -> 数字
</code></pre>

<h1 class="fragment"> :fa-thumbs-down: </h1>

---

fragment:true

##  CSS Typed OM

```javascript
var height = elem.styleMap.get('height');
// {value: 100, type: 'px'}
elem.styleMap.set('height', height.multiply(2));
// {value: 200, type: 'px'}
```
<h1 class="fragment"> :fa-thumbs-up: </h1>

---

<ul class="api-list">
	<li class="">CSS Parser API 1</li>
	<li class="green">CSS Typed OM 1</li>
	<li class="green current">CSS Properties and Values API 1</li>
	<li>CSS Layout API 1</li>
	<li class="green">CSS Painting API 1</li>
	<li>Composited Scrolling And Animation</li>
	<li class="green">Worklets 1</li>
	<li>Box Tree API 1</li>
	<li>Font Metrics API 1</li>
</ul>

---

## CSS Properties and Values API
```markup
<script>
	CSS.registerProperty({
	  name: "--stop-color",
	  syntax: "<color>",
	  inherits: false,
	  initialValue: "rgba(0,0,0,0)"
	});
</script>

<style>
	.button {
	  --stop-color: red;
	  background: linear-gradient(var(--stop-color), black);
	  transition: --stop-color 1s;
	}

	.button:hover {
	  --stop-color: green;
	}
</style>
```

---

<ul class="api-list">
	<li class="">CSS Parser API 1</li>
	<li class="green">CSS Typed OM 1</li>
	<li class="green">CSS Properties and Values API 1</li>
	<li class="current">CSS Layout API 1</li>
	<li class="green">CSS Painting API 1</li>
	<li>Composited Scrolling And Animation</li>
	<li class="green">Worklets 1</li>
	<li>Box Tree API 1</li>
	<li>Font Metrics API 1</li>
</ul>

---
fragment: true

## CSS Layout API

```javascript
registerLayout('masonry', class {
  static get inputProperties() {
    return ['width', 'height']
  }
  static get childrenInputProperties() {
    return ['x', 'y', 'position']
  }
  layout(children, constraintSpace, styleMap, breakToken) {
    // Layout logic goes here.
  }
}
```
```css
body {
  display: layout('masonry');
}
```


---

<ul class="api-list">
	<li class="">CSS Parser API 1</li>
	<li class="green">CSS Typed OM 1</li>
	<li class="green">CSS Properties and Values API 1</li>
	<li>CSS Layout API 1</li>
	<li class="green current">CSS Painting API 1</li>
	<li>Composited Scrolling And Animation</li>
	<li class="green">Worklets 1</li>
	<li>Box Tree API 1</li>
	<li>Font Metrics API 1</li>
</ul>

---

## CSS Painting API
```markup
<textarea id="myElement">
  CSS is awesome.
</textarea>

<style>
#myElement {
  --circle-color: black;
  background-image: paint(circle);
}
</style>

<script>
// Inside PaintWorkletGlobalScope.
registerPaint('circle', class {
  static get inputProperties() {
  	return ['--circle-color'];
  }
  paint(ctx, geom, properties) {
      // Change the fill color.
    const color = properties.get('--circle-color');
    ctx.fillStyle = color;

    // Determine the center point and radius.
    const x = geom.width / 2;
    const y = geom.height / 2;
    const radius = Math.min(x, y);

    // Draw the circle \o/
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }
});
</script>
```
---
## DEMOS

### [circle](/demo/houdini-examples/paint-worklet/circle)
### [ripple](/demo/houdini-examples/paint-worklet/ripple)
### [qr-code](/demo/houdini-examples/paint-worklet/qr-code)
### [chat-bubble](/demo/houdini-examples/paint-worklet/chat-bubble)

<<---- 【注意：】这些 DEMO 只能在 `Chrome Canary` 里面运行，且需要打开 `chrome://flags` 中的 `Experimental Web Platform features` ---->>

---

<ul class="api-list">
	<li class="">CSS Parser API 1</li>
	<li class="green">CSS Typed OM 1</li>
	<li class="green">CSS Properties and Values API 1</li>
	<li>CSS Layout API 1</li>
	<li class="green">CSS Painting API 1</li>
	<li class="current">Composited Scrolling And Animation</li>
	<li class="green">Worklets 1</li>
	<li>Box Tree API 1</li>
	<li>Font Metrics API 1</li>
</ul>

---

<iframe width="820" height="615" src="https://www.youtube.com/embed/EUlIxr8mk7s" frameborder="0" allowfullscreen></iframe>

---

<iframe width="860" height="615" src="https://www.youtube.com/embed/miFpxw6ny8E" frameborder="0" allowfullscreen></iframe>

---

<ul class="api-list">
	<li class="">CSS Parser API 1</li>
	<li class="green">CSS Typed OM 1</li>
	<li class="green">CSS Properties and Values API 1</li>
	<li>CSS Layout API 1</li>
	<li class="green">CSS Painting API 1</li>
	<li>Composited Scrolling And Animation</li>
	<li class="green current">Worklets 1</li>
	<li>Box Tree API 1</li>
	<li>Font Metrics API 1</li>
</ul>
---

## Worklets

* 是 Paint, Layout, Compisitor 这些 API 的基础
* Worklet 与 Web Worker 类似

---

<ul class="api-list">
	<li class="">CSS Parser API 1</li>
	<li class="green">CSS Typed OM 1</li>
	<li class="green">CSS Properties and Values API 1</li>
	<li>CSS Layout API 1</li>
	<li class="green">CSS Painting API 1</li>
	<li>Composited Scrolling And Animation</li>
	<li class="green">Worklets 1</li>
	<li class="current">Box Tree API 1</li>
	<li>Font Metrics API 1</li>
</ul>

---

<ul class="api-list">
	<li class="">CSS Parser API 1</li>
	<li class="green">CSS Typed OM 1</li>
	<li class="green">CSS Properties and Values API 1</li>
	<li>CSS Layout API 1</li>
	<li class="green">CSS Painting API 1</li>
	<li>Composited Scrolling And Animation</li>
	<li class="green">Worklets 1</li>
	<li>Box Tree API 1</li>
	<li class="current">Font Metrics API 1</li>
</ul>

---

bgcolor: #fff

iframe(src='https://ishoudinireadyyet.com/')

---

## Further Reading
* [https://drafts.css-houdini.org/](https://drafts.css-houdini.org/)
* [Houdini: Maybe The Most Exciting Development In CSS You’ve Never Heard Of](https://www.smashingmagazine.com/2016/03/houdini-maybe-the-most-exciting-development-in-css-youve-never-heard-of/)
* [Houdini: Demystifying the Future of CSS - Google I/O 2016](https://www.youtube.com/watch?v=sE3ttkP15f8)
* [BlinkOn 6 Day 1 Talk 4: Houdini and the Future of Web](https://www.youtube.com/watch?v=ks6iDTJn8wA)
* [浏览器的工作原理：新式网络浏览器幕后揭秘](http://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

---
## Q&A

## :fa-comments: