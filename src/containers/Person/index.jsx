import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import {createAddPersonAction} from '../../redux/actions/person'
class Person extends Component {
  addPerson=()=>{
    const name=this.nameNode.value
    const age=this.ageNode.value
    const personObj={id:nanoid(),name,age}
    this.props.addPerson(personObj)
  }
  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h4>上方求和为:{this.props.count}</h4>
        <input ref={c=>this.nameNode=c} type="text" placeholder="输入名字" />
        <input ref={c=>this.ageNode=c} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((item)=>{
            return <li key={item.id}>名字：{item.name}，年龄：{item.age}</li>
          })}         
        </ul>
      </div>
    )
  }
}
export default connect(
  state=>({count:state.sum,persons:state.persons}),
  {
    addPerson:createAddPersonAction
  }
)(Person)
