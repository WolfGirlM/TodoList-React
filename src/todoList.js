import React, { Component } from 'react';
import { Button,Layout,Card,Input} from 'antd'
import TodoItem from './TodoItem'

const { Header,Content } = Layout;
class TodoList extends Component {
  state = {
    list: [],
    inputValue: ''
  }
  handleBtnClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  deleteItem = (index) => {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
  renderTodoItems = () => this.state.list.map((item, index) =>
    <TodoItem 
      key = { index }
      content = {item}
      delete = { () => { this.deleteItem(index) }}
    />
  )
  //JSX
  render() {
    const { inputValue } = this.state
    return (
      < Layout theme="light">
        <Header>@狼果驿站</Header>
        <Content>
          <Card title="To do List @React">
              <div className="tagGroup">
              <Input value = { inputValue } onChange = { this.handleInputChange }/>
              <Button type = "primary" onClick={ this.handleBtnClick } className='add-btn'> 创建任务 </Button>
            </div>
            <ul>{this.renderTodoItems() }</ul>
          </Card>
        </Content>
      </Layout>
    );
  }
}

export default TodoList;
