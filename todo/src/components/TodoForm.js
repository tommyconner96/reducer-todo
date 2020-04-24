import React, { useState } from 'react'

export default function TodoForm(props) {

    const [todo, setTodo] = useState('')

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleClear = (e) => {
        e.preventDefault()
        props.dispatch({
            type: 'CLEAR_COMPLETE'
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.dispatch({
            type: 'ADD_TODO', 
            payload: todo
        })
        setTodo('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add Item: 
                        <input 
                            name='todo-item' 
                            onChange={handleChange} 
                            value={todo} 
                            />
                </label>
            </form> 
                <br />
            <button onClick={handleSubmit}>Add Item</button>
                <br />
            <button onClick={handleClear}>Clear Completed</button>
        </div>
    )
}
