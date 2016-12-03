import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import MeetingComponent from './MeetingComponent';
import BioComponent from './BioComponent';
import LogoComponent from './LogoComponent';
let jsonObject = require('../../groups.json')

class App extends React.Component {

  constructor() {
    super();

    this.myProp = jsonObject;
    this.currentGroup = 0

  }

  render() {
    return (
        <div className="row1">
          <div className="leftColumn">
            <LogoComponent/>
          </div>
          <div>
            <MeetingComponent/>
          </div>
          <div>
            <BioComponent string={this.myProp.groups[0].name}/>
          </div>
        </div>
    )
  }
}


export default App;
