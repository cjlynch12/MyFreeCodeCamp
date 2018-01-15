//manage state locally - simple to-do list form

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({input: event.target.value});
  }
  submitMessage(){
    let newArr = [...this.state.messages,this.state.input];
    this.setState({messages: newArr});
    this.setState({input: ''});
  }
  render() {
    const renderMessages = this.state.messages.map((item) => <li>{item}</li>)
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }                                           
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <button type="submit" onClick={this.submitMessage}> Submit! </button>
        <ul> {renderMessages} </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
