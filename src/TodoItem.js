import React, { Component } from 'react'
import { Icon } from 'antd'

class TodoItem extends Component {
  handleDelete = () => {
    this.props.delete()
  }
  render() {
    const { content } = this.props;
    return (
      <div>
        <li>{ content } <Icon type = "check-square" onClick={this.handleDelete}/></li>
      </div>
    );
  }
}
export default TodoItem