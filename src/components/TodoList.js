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
        setTask(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(task == '') return;
        const newTodos = [...todos,{ task, isCompleted: false}];
        setTodos(todos => newTodos);
        setTask('');
    }

    const handleRemoveTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return(
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={ handleSubmit }>
                Add Task : <input 
                value={ task } placeholder="Add New Task" 
                onChange={handleNewTask}/>
            </form>
            
            <ul>
                { todos.map((todo, index) => (
                    <li key= { index }>{ todo.task } 
                    <span onClick = { () => handleRemoveTask(index)}>削除</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;