import React, { Component, Fragment } from 'react';
import { Button} from 'antd'

import TodoItem from './TodoItem'
class TodoList extends Component {
  //methods
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  getTodoItems() {
    return (
    this.state.list.map((item, index) => {
      return ( 
        <TodoItem 
          key = { index }
          content = {item}
          index = {index}
          delete = {this.handleItemClick}
        />
      )
    })
    )
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange(data) {
    this.setState({
      inputValue: data.target.value
    })
  }
  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
  //JSX
  render() {
    return (
      <Fragment>
        <div className='mainContent'>
          <p>To do List @React</p>
          <div className="tagGroup">
            <input value = {this.state.inputValue} onChange = { this.handleInputChange }/>
            {/* <button onClick={this.handleBtnClick}>创建任务</button> */}
             <Button type = "primary" onClick={this.handleBtnClick} className='add-btn'> 创建任务 </Button>
          </div>
        </div>
        <ul>{this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
