import React, { Component } from 'react';
import Routes from './Routes';

class App extends Component {

  render(){
    return(
      <div className="App">
        <div id="page-wrap" className="container">
          <Routes/>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
