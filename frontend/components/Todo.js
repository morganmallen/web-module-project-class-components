import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    console.log(this.props.todo.id)
  }
  render() {
  return (<li onClick={this.handleClick}>{this.props.todo.name} { this.props.todo.completed?<span>- completed</span> : <span> </span> }</li>)
  }
}
