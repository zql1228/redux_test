import { createStore ,applyMiddleware} from "redux";
//引入redux-thunk
import thunk from 'redux-thunk'
//引入为count组件的reducer
import countReducer from './reducers/count'
//暴露store
export default createStore(countReducer,applyMiddleware(thunk))