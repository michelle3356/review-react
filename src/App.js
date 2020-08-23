import React from 'react';
import Welcome from './Welcome';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      name: 'michelle'
    }
  }

  handleClick = (name) => {
    this.setState({
      name
    })
  }

  render(){
    return (
      <div>
        <h3>title</h3>
        <Welcome name={this.state.name} />
        <button
          onClick={this.handleClick.bind(this, 'lulu')}
        >Click</button>
      </div>
    );
  }
}

export default App;
