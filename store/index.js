import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  count: 0
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return Object.assign({}, state, {
      count: state.count + 1
    })
    case 'DECREMENT': 
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case 'RESET': 
      return Object.assign({}, state, {
        count: initialState.count
      })
    default:
      return state
  }
}

// initializeStore
export function initializeStore (state = initialState) {
  return createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}