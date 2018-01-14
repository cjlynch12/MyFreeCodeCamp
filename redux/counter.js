//simple Redux boiler plate

//define action types (action.type) as immuteable
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//Reducer object: takes a state and action as an argument, performs a check, return a new state
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    break;
    case DECREMENT:
      return state - 1;
    break;
    default:
      return state;
  }
}

//Action creator - creates an action to pass to a reducer
const incAction = () => {
  return {
    type: INCREMENT
  }
}
const decAction = () => {
  return {
    type: DECREMENT
  }
}

//Init the Redux store by passing a reducer to .createStore method
const store = Redux.createStore(counterReducer);
