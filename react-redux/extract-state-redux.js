//sample of extracting react state to a redux store

// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const messageReducer = (state=[], action) => {
  switch (action.type) {
    case ADD:
      let newArr = [...state,action.message];
      return newArr;
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer);
