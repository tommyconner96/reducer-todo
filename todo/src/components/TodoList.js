import React from 'react'

export default function TodoList(props) {

    const toggleComplete = (e) => {
        e.preventDefault()

        props.dispatch({
            type: 'TOGGLE_COMPLETE',
            payload: e.target.id
        })
    }
    return (
        <div>
            {props.state.map(todo => {
                console.log(todo, 'return on TodoList')
                return <p>
                    <div
                    className='todo-item' 
                    id={todo.id} 
                    onClick={toggleComplete}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                    >{todo.item}</div>
                    </p>
            })}
        </div>
    )

} 