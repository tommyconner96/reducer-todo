//inital state
export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 2342342342
      
    },
    {
      item: 'Finish reducer project',
      completed: false,
      id: 2342342
    
  },
    ]

//reducer
export const TodoReducer = (state, action) => {
//switch statement
    switch (action.type) {
//cases
      case 'ADD_TODO':
        return [...state, 
            {
            item: action.payload, 
            completed: false, 
            id: Date.now()
            } 
        ]

      case 'TOGGLE_COMPLETE': 
        return state.map((todo) => {
          if (todo.id === Number(action.payload)) {
            return {...todo, completed: !todo.completed}
          }
          else {
            return todo
          }
        })
    case 'CLEAR_COMPLETE': 
    return state.filter((todo) => !todo.completed)
      default: {
        return state
      }
    }
  }