import React from 'react';
import './TodoList.css'

let TodoList = () => {
    return (<div className='form-input'>
        <form>
            <div id='input'>
                <label htmlFor='task-input'>Add Task</label>
                <input type='text' id='email' name='task-input' placeholder='Enter your Task' />
            </div>
            <div id='buttons'>
                <button id='delete'>Delete Task</button>
                <button type='submit'>Create Task</button>
            </div>
        </form>
    </div>)
}
export default TodoList;