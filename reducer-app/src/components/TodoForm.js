import React,{useState, useReducer} from 'react'
import { appReducer, initialState } from '../reducers/reducer'
import Todo from './Todo'

const TodoForm = () => {
 const [state, dispatch] = useReducer(appReducer, initialState)
const [newTodo, setNewTodo] = useState({
    item: '',
    completed: false,
    id: Date.now()
})

const changeHandler = e => {
    setNewTodo({...newTodo, [e.target.name]: e.target.value})
}

const addTodo = e => {
    e.preventDefault(); 
  dispatch({type: 'ADD_TODO', payload: newTodo})
  setNewTodo({
      item: '',
      completed: false,
      id: Date.now()
  })
}

const clear = e => {
e.preventDefault(); 
    dispatch({ type: 'CLEAR', payload: newTodo})
}

    return(
        <div>
            {state.map(todo => (
                <Todo todo ={todo} key ={todo.id} dispatch={dispatch} /> 
            ))}
            <form>
                <input placeholder ='item' name='item' type ='text' value = {newTodo.item} onChange={changeHandler}/>
                <button onClick={addTodo}>Add Item</button>
                <button onClick ={clear}>Clear Completed</button>
            </form>
        </div>
    )

}

export default TodoForm; 