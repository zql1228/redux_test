import React, { Component } from 'react'
import store  from '../../redux/store'
//引入actionCreator
import { creatIncrementAction,creatDecrementAction } from '../../redux/count_action'
export default class Count extends Component {
    componentDidMount(){
        //检测redux中状态的变化
        // store.subscribe(()=>{
        //     this.setState({})
        // })
    }
    //加
    increment=()=>{
        const {value}=this.selectNumber
       //通知redux+value
       store.dispatch(creatIncrementAction(value*1))
    }
    //减
    decrement=()=>{
        const {value}=this.selectNumber
        store.dispatch(creatDecrementAction(value*1))
    }
    //奇数加
    OddCrement=()=>{
        const {value}=this.selectNumber
        const {count}=store.getState()
        if(count%2!==0){
            store.dispatch(creatDecrementAction(value*1))
        }
    }
    //异步加
    Diffcrement=()=>{
        const {value}=this.selectNumber
     setTimeout(()=>{
        store.dispatch(creatDecrementAction(value*1))
     },500)            
        }
  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={c=>{this.selectNumber=c}}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>
        <button onClick={this.increment} >+</button>&nbsp;
        <button onClick={this.decrement} >-</button>&nbsp;
        <button onClick={this.OddCrement}>当前求和为奇数再加</button>&nbsp;
        <button  onClick={this.Diffcrement}>异步加</button>&nbsp;
      </div>
    )
  }
}
