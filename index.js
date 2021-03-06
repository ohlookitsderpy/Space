import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './Components/Title';
import Fact from './Components/Fact';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}} className='background'>
        <Title></Title>
        <Fact></Fact>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
