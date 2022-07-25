import { createStore } from "redux";
//引入为count组件的reducer
import countReducer from './count_reducer'
//暴露store
export default createStore(countReducer)