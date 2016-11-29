"use strict"

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import meetingComponent from './meetingComponent';
import bioComponent from './bioComponent';

class App extends React.Component {
  render() {
    return (
        <div className="row1">
          <div className="leftColumn">
            <h1>hello world</h1>
          </div>
          <div className="rightColumn">
          </div>
          <div className="bioInformation"></div>
        </div>
    )
  }
}


export default App;
