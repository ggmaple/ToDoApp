import React, { useState } from 'react';
const TodoList = () => {
    const initialState = [
        {
            task: 'Learn Vue.js',
            isCompleted: false
        },
        {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        },
    ]

    const [todos, setTodos] = useState(initialState);
    const [task, setTask] = useState('');

    const handleNewTask = (event) => {
        setTask( event.target.value);
    }
    
    return(
        <div>
            <h1>ToDo List</h1>
            Add Task : <input
            value= {task} 
            onChange={handleNewTask}
            />
            <ul>
                { todos.map((todo, index) => (
                    <li key= { index }>{ todo.task }</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;