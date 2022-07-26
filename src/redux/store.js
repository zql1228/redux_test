import { createStore ,applyMiddleware, combineReducers} from "redux";
//引入redux-thunk
import thunk from 'redux-thunk'
//引入为count组件的reducer
import countReducer from './reducers/count'
//引入为person组件的reducer
import personReducer from "./reducers/person";
const allReducer=combineReducers({
    sum:countReducer,
    persons:personReducer
})
//暴露store
export default createStore(allReducer,applyMiddleware(thunk))