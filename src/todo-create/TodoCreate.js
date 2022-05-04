import React, {useState} from 'react'

function TodoCreate(props) {
    const [getTodo, setTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getTodo
        }

        props.onCreateTodo(newTodo)

        setTodo('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {getTodo}
            <br></br>
            <input name='title' type='text' id='title' value={getTodo} onChange={(e) => {setTodo(e.target.value)}}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default TodoCreate;