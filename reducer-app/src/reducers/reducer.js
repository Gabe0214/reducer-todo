

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