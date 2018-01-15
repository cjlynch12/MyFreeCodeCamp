//map state to props
const state = [];

// change code below this line
function mapStateToProps(state) {
  return {
    messages: state
  }
}

//map dispatch to props
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line
function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: function(newMsg) {
      dispatch(addMessage(newMsg))
    }
  }
}



// fully connected ReactRedux app
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// change code below this line
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
