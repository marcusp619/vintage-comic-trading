import React, {Component} from 'react';
import {fetchComic} from '../../util/';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetchComic();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Learn React</header>
      </div>
    );
  }
}

export default App;
