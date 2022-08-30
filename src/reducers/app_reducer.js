
export const initialState = {
    fields: {
      name: '',
      email: '',
      type: '',
      password: '',
    },
    carousel: {
      step: 1,
    },
    inputErrors: {
        email: null
    }
}
  
// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
// The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'fields/name': {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    name: action.payload,
                }
            }
        }
        case 'fields/email': {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    email: action.payload,
                }
            }
        }
        case 'fields/type': {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    type: action.payload,
                }
            }
        }
        case 'fields/password': {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    password: action.payload,
                }
            }
        }
        case 'input_errors/email': {
            return {
                ...state,
                inputErrors: {
                    ...state.fields,
                    email: action.payload,
                }
            }
        }
        case 'carousel/step': {
            return {
                ...state,
                carousel: {
                    ...state.carousel,
                    step: action.payload,
                }
            }
        }
        // Do something here based on the different types of actions
        default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
}