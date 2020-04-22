//inital state
export const InitialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589  
}

//actions
//these can also be written as dispatches in where youre calling the reducer -- not sure which way i wanna do it yet ill revisit this (and erase this line)


//reducer
export const TodoReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_COMPLETE":
        return {
          ...state,
          completed: !state.completed
        }
      case "ADD_TODO":
        return {

        }
        case "CLEAR_COMPLETE":
            return {

            }
      default:
        return state
    }
  }