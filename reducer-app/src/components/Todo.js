import React from 'react'

const Todo = props => {
    return (
        <div onClick ={() => props.dispatch({type: 'MARK_COMPLETE', payload: props.todo})} style = {{textDecoration: props.todo.completed ? 'line-through': ''}} >
            <h2>{props.todo.item}</h2>
            
        </div>
    )
}

export default Todo; 