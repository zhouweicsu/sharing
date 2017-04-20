theme: material
transition: slide

---

![Angular-logo](http://p6.qhimg.com/d/inn/303cf5e1/angular-white-logo.png)
### 周炜 @奇舞团
### zhouwei3-xy @360.cn

----------
## 目录


* 简单介绍
* 五大特性
* 其他

----------
fragment: true

## 什么是AngularJS


* [Superheroic JavaScript MVW Framework](https://angularjs.org/)
* 2009 - ```<angular/>```
* Misko Hevery, Adam Abrons
* 2011 - AngularJS 1.0 
* Angular2.0 is coming...
* 详细发展史>>>>[戳我](http://chuansong.me/n/1447006)

----------
## ng-app

iframe(height=399 src='//codepen.io/zhouweicsu/embed/oXyvbL/?height=399&theme-id=0&default-tab=html')

----------
## ng-init

iframe(height=401 src='//codepen.io/zhouweicsu/embed/ZGRzpN/?height=401&theme-id=0&default-tab=html')

----------
## ng-controller

iframe(height=403 src='//codepen.io/zhouweicsu/embed/bdKbeM/?height=403&theme-id=0&default-tab=html')


----------
## ng-hide ng-show

iframe(height=440 src='//codepen.io/zhouweicsu/embed/waXwJX/?height=440&theme-id=0&default-tab=result')

----------
## ng-repeat $http

iframe(height=446 src='//codepen.io/zhouweicsu/embed/vOrBVp/?height=446&theme-id=0&default-tab=result')

----------
## ng-filter

iframe(height=388 src='//codepen.io/zhouweicsu/embed/MwXgdw/?height=388&theme-id=0&default-tab=result')

----------
## ng-focus ng-click ng-dbclick

iframe(height=453 src='//codepen.io/zhouweicsu/embed/OVEJNq/?height=453&theme-id=0&default-tab=result')


----------

* More Demo-[todoMVC](http://todomvc.com/examples/angularjs)


----------
## 特性


----------
### 双向数据绑定-jQuery

iframe(height=412 src='//codepen.io/zhouweicsu/embed/KpeKNd/?height=412&theme-id=0&default-tab=result')



----------
### 双向数据绑定-Angular

iframe(height=415 src='//codepen.io/zhouweicsu/embed/mJKdOQ/?height=415&theme-id=0&default-tab=result')


----------
### 双向数据绑定

<table width="100%">
    <tr>
        <td style="text-align:center; width: 50%;">
          <img src="http://p9.qhimg.com/d/inn/303cf5e1/One_Way_Data_Binding.png">
        </td>
        <td style="text-align:center;">
          <img src="http://p4.qhimg.com/d/inn/303cf5e1/Two_Way_Data_Binding.png">
        </td>
    </tr>
</table>

----------
### 双向数据绑定的实现原理

* $scope
* $digest
* $watch 
* $apply

----------
### 双向数据绑定的实现原理

* Demo-$watch

----------
fragment: true

## $digest优化

* 减少触发$digest的次数
* 减少$watch list的长度
* 放弃使用$digest，拥抱Object.observe

----------
fragment: true

## 模板


iframe(height=438 src='//codepen.io/zhouweicsu/embed/oXyvbL/?height=438&theme-id=0&default-tab=html')

* HTML == 模板

----------
## MVW

I'd rather see developers build kick-ass apps that are well-designed and follow separation of concerns, than see them waste time arguing about *MV&#42; nonsense*. And for this reason, I hereby declare AngularJS to be *MVW* framework - Model-View-Whatever. Where Whatever stands for "*whatever works for you*". 

——Igor Minar

----------
fragment: true

# 依赖注入

* 在内部创建依赖（通常使用new关键字）
* 通过全局变量进行引用
* 在需要的时候通过参数进行传递

----------
# DI in Angular

iframe(height=434 src='//codepen.io/zhouweicsu/embed/YXvzeR/?height=434&theme-id=0&default-tab=html')

----------
# DI in Angular

```javascript
someModule.controller('MyController', function($scope, CalcService) {
  // ...
});
```

----------
# DI in Angular

```javascript
someModule.controller('MyController', 
  ['$scope','CalcService', function($scope, CalcService) {
  // ...
}]);
```


----------
# DI in Angular

```javascript
var MyController = function($scope) {
  // ...
}
MyController.$inject = ['$scope','CalcService'];
someModule.controller('MyController', MyController);
```

----------
### 赋予HTML超能力的指令（Directive）

![directive](http://p0.qhimg.com/d/inn/9c201276/angularjs-directives-4-638.jpg)

----------
### 自定义指令

iframe(height=436 src='//codepen.io/zhouweicsu/embed/BNVaWg/?height=436&theme-id=0&default-tab=result')


----------
## 特性

* 双向数据绑定
* 模板
* MVW
* 依赖注入
* 指令 Directive

----------
### 其他---使用场景
<table width="100%">
    <tr>
        <td style="text-align:left; width: 50%; color: #5EEB37">
          <h4 style="color: ">推荐</h4>
          <ul>
            <li>SPA</li>
            <li>CRUD应用（e.g. 后台管理系统、饿了么）</li>
          </ul>
        </td>
        <td style="text-align:left; color: #f60;">
          <h4>！推荐</h4>
          <ul>
            <li>SEO(P.S. Prerender)</li>
            <li>DOM操作频繁(e.g. GUI editors, Games)</li>
            <li>内容丰富的网页（导航、新闻类网站）</li>
          </ul>
        </td>
    </tr>
</table>

----------
### 其他—--组件推荐

* 组件官网---[http://ngmodules.org/](http://ngmodules.org/)
* Table组件---[合集](https://github.com/hjzheng/CUF_meeting_knowledge_share/issues/26)
* 文件上传---[ng-flow](http://ngmodules.org/modules/ng-flow)

----------

### 学习曲线
![feelings about angularjs over time](http://p2.qhimg.com/d/inn/303cf5e1/feelings_about_angularjs_over_time.png)

----------
## 参考文档

* AngularJS 资源合集   [http://blog.aijc.net/AngularLearing/](http://blog.aijc.net/AngularLearing/)
* PPK---[The problem with Angular](http://www.quirksmode.org/blog/archives/2015/01/the_problem_wit.html)  [中文]( https://github.com/xufei/blog/issues/15)
----------
##  Q&A

# :fa-comments:
