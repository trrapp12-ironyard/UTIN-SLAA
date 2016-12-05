import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
let jsonObject = require('../../groups.json')

class App extends React.Component {

  constructor() {
    super();

    this.myProp = jsonObject;
    this.state = {
      currentGroup: 0,
      bio: this.myProp.groups[0].bio,
      logo: this.myProp.groups[0].logo,
    };

    this.updateState = this.updateState.bind(this)

    }

    updateState() {

      let newGroupNumber = (this.state.currentGroup +1)% this.myProp.groups.length;
      let newBio = this.myProp.groups[newGroupNumber].bio;
      let newLogo = this.myProp.groups[newGroupNumber].logo;
      this.setState({
        currentGroup: newGroupNumber,
        bio: newBio,
        logo: newLogo
      });

    }

  render() {

    let logo = (this.state.logo)
    let paragraphs = [];
    let bio = (this.state.bio);
    for (let i = 0; i < bio.length; i ++) {
      paragraphs.push(<p key= {i}>{bio[i]}</p>);
    }

    return (
        <div className="">
          <div><img src={logo}/></div>
          <div>{paragraphs}</div>
          <div></div>
          <button onClick={this.updateState}>Explore Groups</button>
        </div>

    )
  }
}


export default App;
