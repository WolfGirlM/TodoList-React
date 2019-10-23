import React, { Component } from 'react'
import { Icon } from 'antd'
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.delete(this.props.index)
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