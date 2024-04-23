export const initialState = {
    todos: ['Apple', 'Mango'],
    editData: {
        index: '',
        value: ''
    }
}

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            let filter = state.todos.filter((t, i) => t !== action.payload);
            return {
                ...state,
                todos: [...filter]
            }

        case "EDIT_TODO":
            return {
                ...state,
                editData: {
                    index: action.payload.index,
                    value: action.payload.value
                }
            }

        case "UPDATE_TODO":
            state.todos.splice(action.payload.index, 1, action.payload.value)
            return {
                ...state,
                todos: [...state.todos],
                editData: {
                    index: '',
                    value: ''
                }
            }

            case 'LOAD_STATE':
                console.log('Loading state from Local Storage...');
                const savedState = localStorage.getItem('todoState');
                return savedState ? JSON.parse(savedState) : state;
          
              case 'SAVE_STATE':
                console.log('Saving state to Local Storage...');
                localStorage.setItem('todoState', JSON.stringify(state));
                return state;


        default:
            console.log('Unknown action type:', action.type);
            return state;
    }



}
