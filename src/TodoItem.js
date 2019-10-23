import React from 'react'
class TodoItem extends React.Component {
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
      { content }
      <i onClick={this.handleDelete}>x</i>
      </div>
    );
  }
}
export default TodoItem