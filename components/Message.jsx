class Message extends React.Component {
  changeMessage = () => {
    this.props.dispatch({ type: 'BAZ_ACTION', payload: 'bazzing' });
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.foo}</h1>
        <button onClick={this.changeMessage}>Change me</button>
      </React.Fragment>
    );
  }
}

Message = ReactRedux.connect(state => state)(Message);
