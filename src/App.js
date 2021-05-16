import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      name: 'Иван'
    }
  }

  render() {
    return (
      <div className="App">
        <p>
          {this.state.show ? 'Привет, ' + this.state.name + '!' : 'Пока, ' + this.state.name + '!'}
        </p>
      </div>
    );
  }
}

export default App;
