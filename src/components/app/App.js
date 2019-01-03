import React, { Component } from 'react';
import GitHub from '../gitHub/GitHub';
import Develop from '../develop/Develop';

class App extends Component {
  render() {
    return (
    	<div>
	      <GitHub />
    	  <Develop />
    	</div>
    );
  }
}

export default App;
