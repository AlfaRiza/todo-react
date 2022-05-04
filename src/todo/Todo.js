import React, {useState} from 'react'
import './Todo.css'
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';

function Todo() {

    const [dataTodo, setTodos] = useState([{
        id: 1,
        title: 'Makan'
    },{
        id: 2,
        title: 'Minum'
    },{
        id: 3,
        title: 'Sunat'
    }]);

    const eventCreateTodo = (todo) => {
         setTodos(dataTodo.concat(todo))
    }

  return (
    <div>
        <h1>Todo App</h1>
        <TodoCreate onCreateTodo={eventCreateTodo}/>
        <TodoList todos={dataTodo} />
    </div>
  )
}

export default Todo;