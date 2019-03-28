## 依赖注入

wait。。。

## ChangeDetection
- 用于检测程序内部变化，然后反映到UI上
- 引起状态变化的：Events、XHR、Timers
- ApplicationRef 监听 NgZone 的 onTurnDone，然后执行检测

当所以组件（component）加载完毕之后，会生成组件树，当树的某一部分状态发生变化的时候，会触发angular的状态检查 ChangeDetection 来将数据的变化显示到UI上。默认的机制是，当有一部分变化时会引起全局的检查。而我们可以用onPush策略显示的告诉angular什么时候做检查，而不是按照默认的angular认为的需要检查的 Events、XHR、Timers 发生。

关键代码：
```
changeDetection: ChangeDetectionStrategy.OnPush

```

## 指令
- 结构性指令：改变外观和布局
- 属性型指令：改变元素的外观和行为

Refer to `drag.direvtive.ts` file.


## 属性型指令
`*`语法糖
```
<a *ngIf="user.login">Exit</a>

EQUAL:

<ng-template ngIf="user.login">
  <a>Exit</a>
</ng-template>
```
## 模块
- forRoot() : 导入的时候我们需要元数据跟随传入的值变化，因此需要这种工厂方法
