import React, { Component } from 'react';
import './style/App.css';
import Pincard from './components/pincard'

class App extends Component {
    render() {
        return (
            <div className="App">
              <Pincard/>
            </div>
            );
    }
}

export default App;
