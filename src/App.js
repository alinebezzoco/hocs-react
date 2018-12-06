import React, {Component} from 'react';
import Main from './Main';

class App extends Component {

  render(){
    return(
      <div className="App">
        <div id="page-wrap" className="container">
          <Main/>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
