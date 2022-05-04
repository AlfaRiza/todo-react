import React from 'react'
import './TodoList.css';

function TodoList(props) {
    console.log(props.todos);
  return (
    <div>
        <ul>
            {
                props.todos.map(todo => {
                    return <li key={todo.id}>{ todo.title }</li>
                })
            }
        </ul>
    </div>
  )
}

export default TodoList;