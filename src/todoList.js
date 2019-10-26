import React, { useState } from 'react';
import { Button,Layout,Card,Input} from 'antd'
import TodoItem from './TodoItem'

const { Header,Content } = Layout;

const TodoList = () => {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleBtnClick = () => {
    setList([...list, inputValue])
    setInputValue('')
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const deleteItem = (index) => {
    const temp = [...list];
    temp.splice(index, 1);
    setList(temp)
  }

  const renderTodoItems = () => list.map((item, index) =>
    <TodoItem 
      key = { index }
      content = { item }
      delete = { () => { deleteItem(index) }}
    />
  )
  //JSX
  return (
    < Layout theme="light">
      <Header>@狼果驿站</Header>
      <Content>
        <Card title="To do List @React">
            <div className="tagGroup">
            <Input value = { inputValue } onChange = { handleInputChange }/>
            <Button type = "primary" onClick={ handleBtnClick } className='add-btn'> 创建任务 </Button>
          </div>
          <ul>{ renderTodoItems() }</ul>
        </Card>
      </Content>
    </Layout>
  )
}

export default TodoList;
