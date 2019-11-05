import React,{useState, useReducer} from 'react'
import { appReducer, todos } from '../reducers/reducer'


const TodoForm = () => {
 const [state, dispatch] = useReducer(appReducer, todos)



    return(
        <div>
            <form>
                <input placeholder ='item' name='item' type ='text'/>
                <button>Add Item</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )

}