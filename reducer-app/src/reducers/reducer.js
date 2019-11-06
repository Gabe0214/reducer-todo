

export const appReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state, {
                    item: action.payload.item, 
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'MARK_COMPLETE'    : 
          return state.map(todo => {
              if(todo.id === action.payload.id) {
                  return {
                      ...todo,
                    completed: !todo.completed
                  }
              } else {
                  return todo
              }
            
          })

          case 'CLEAR' :
              return state.filter(todo => !todo.completed)
    }
}


export const initialState = [
    {
        item: 'Learn about Reducers',
        completed: false,
        id: 0
    },
    {
        item: 'Learn about Redux',
        completed: false,
        id: 1
    },
    {
        item: 'Learn about Context API',
        completed: false,
        id: 2
    },
]