import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import meetingComponent from './meetingComponent';
import bioComponent from './bioComponent';

class App extends React.Component {
  render() {
    return (
        <div className="row1">
          <div className="leftColumn">
            <h1>Random things</h1>
          </div>
          <div className="rightColumn">
          </div>
          <div className="bioInformation"></div>
        </div>
    )
  }
}


export default App;

// steps to study. 1)read the JSON object from the file 2)turn into an object 3) how to get it from the object into component 3.props 4)may need to look up .bind 5)display is the {}
