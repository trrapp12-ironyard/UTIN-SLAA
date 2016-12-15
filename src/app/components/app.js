import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Meeting from './Meeting.js';
import Groups from './Groups.js';
let jsonObject = require('../../groups.json')

class App extends React.Component {

  constructor() {
    super();

    this.myProp = jsonObject;

    this.state = {
      currentGroup: 0,
      bio: this.myProp.groups[0].bio,
      logo: this.myProp.groups[0].logo,
      meetingTitle: this.myProp.groups[0].meetings[0].title,
      meetingTime: this.myProp.groups[0].meetings[0].time,
      meetings: this.myProp.groups[0].meetings,


    };

    this.updateState = this.updateState.bind(this)

    }

    updateState() {

      let newGroupNumber = (this.state.currentGroup +1)% this.myProp.groups.length;
      let newBio = this.myProp.groups[newGroupNumber].bio;
      let newLogo = this.myProp.groups[newGroupNumber].logo;
      let newMeetingTitle = this.myProp.groups[newGroupNumber].meetings[0].title;
      let newMeetingTime = this.myProp.groups[newGroupNumber].meetings[0].time;
      let newMeetings = this.myProp.groups[newGroupNumber].meetings;

      this.setState({
        currentGroup: newGroupNumber,
        bio: newBio,
        logo: newLogo,
        meetingTitle: newMeetingTitle,
        meetingTime: newMeetingTime,
        meetings: newMeetings
      });

    }

  render() {

    let paragraphs = [];
    let logo = (this.state.logo);
    let bio = (this.state.bio);
    let meetingTitle = (this.state.meetingTitle);
    let meetingTime = (this.state.meetingTime);
    console.log("I want this to be my state.title", this.state.meetingTitle)
    for (let i = 0; i < bio.length; i ++) {
      paragraphs.push(<p className="bio-paragraph" key= {i}>{bio[i]}</p>);
    }

    return (
        <div className="bio-paragraph margins pvertmargins">
          <div className="textcenter">
            <h1>Twelve Step Groups in the SLC area</h1>
          </div>
          <br/>
          <h2>{meetingTitle}</h2>
          <div><img className="photo pspacing"src={logo}/></div>
          <h5><div className="bio-paragraph pspacing">{paragraphs}</div></h5>
          <div className="fillwidth">
            <div className="meeting-paragraph pspacing textcenter">
              {
                this.state.meetings.map(function(meeting, j){
                  return <Meeting meeting={meeting} key={j}></Meeting>
                })
              }
            </div>
          </div>
          <div className="textcenter">
            <button onClick={this.updateState}>Explore Groups</button>
          </div>

        </div>

    )
  }
}


export default App;
