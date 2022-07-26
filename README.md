## 求和案列redux精简版
（1）去除组件自身的状态
（2）src下建立：
    -src
        -redux
            -store.js
            -count_reducer.js
(3).store.js
    (1)引入redux中的createStore函数，创建一个store
    (1)createStore调用时要传入一个为其服务的reducer
    (1)记得暴露store对象
（4）count_reducer.js
    (1)reducer的本质是一个对象，接受prestate,action返回加工后的状态
    （2）renducer有两个作用，初始化状态，加工状态
    （3）reducer被第一次调用时，时store自动触发的，传递的preState是undefined
（5)在index.js中检测store中状态的改变，一旦发生改变，重新渲染<App/>

## 3.求和案例_redux异步action版
    (1).明确:延迟的动作不想交给组件自身，想交给action
    (2).何时需要异步action:想要对状态进行操作，但是具体的数据靠异步任务返回(非必须)。
    (3).具体编码:
        1).yarn add redux-thunk，并配置在store中
        2).创处action的函数不再返回一般对象，面是一个函数。该没数中写异步任务.3).异少任务有结果后，分发一个同步的action去真正操作数据。
    (4).备注:异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action.

## 4.求和案例_react-redux基本使用
    (1).明确网个概念:
        1).UI组件:不能使用任何redux的api。只负责页面的呈现、交互等。
        2).容器组作:负责和redux通信。将结果交给UI组件。
    (2).如何创建一个容器组件————靠react-redux 的connect函数
        connect(mapstateToProps,napDispatchToProps)(UI组件)
        -mapstateToProps:映射状态。返回值是一个对象
        -mapDispatchToProps :映射操作状态的方法。返回值是一个对象
    (3).备注:容器组件中的store是props传进去的。而不是在容器组件中直接引入
## 5.求和案例_react-redux优化
    (1).容器组件和UI组件整合成一个文件
    (2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store=(store}>即可。
    (3).使用了react-redux后也不用再自己监测redux中状态的改变了，容器组件可以自动完成这个工作。
    (4).mapDispatchToProps也可以简单的写成一个对象
    (5).一个组件要和redux“打交道”要经过那几步?
        (1).定义好UI组件---不暴露
        (2).引入connect生成一个容器组件，并暴露，写法如下:connect(
        state => ({ key : value}),
        { key : xxxxxAction}
        )(UI组件)
        (4).在UI组件中通过this.props.xxxxxx读取和操作状态


