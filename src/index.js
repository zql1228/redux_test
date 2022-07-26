//引入react核心库
import React from "react";
//引入createRoot
import { createRoot } from 'react-dom/client';
//引入App
import App  from'./App'
 import store from "./redux/store";
 import { Provider } from "react-redux";
//渲染组件到页面
const root =createRoot(document.getElementById('root'))
root.render(<Provider store={store}><App /></Provider>)
//监测redux中状态的改变
// store.subscribe(()=>{root.render(<App />)})
