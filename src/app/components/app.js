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
      meetingTitle: this.myProp.groups[0].meetings[0].title,


      // meetingTime: this.myProp.groups[0].meetings[0].time,
      // meetingDay: this.myProp.groups[0].meetings[0].day,
      // meetingAddress: this.myProp.groups[0].meetings[0].address,
      // meetingLocation: this.myProp.groups[0].meetings[0].location,
      // meetingPointOfContact: this.myProp.groups[0].meetings[0].pointOfContact,
      // meetingPhoneNumber: this.myProp.groups[0].meetings[0].phoneNumber,
      // meetingMap: this.myProp.groups[0].meetings[0].mapLink

    };

    this.updateState = this.updateState.bind(this)

    }

    updateState() {

      let newGroupNumber = (this.state.currentGroup +1)% this.myProp.groups.length;
      let newBio = this.myProp.groups[newGroupNumber].bio;
      let newLogo = this.myProp.groups[newGroupNumber].logo;
      let newMeetingTitle = this.myProp.groups[newGroupNumber].meetings[0].title;
      console.log(this.myProp.groups[0].meetings[0].title)
      console.log(newMeetingTitle);
      // let newMeetingTime: this.myProp.groups[newGroupNumber].meetings[0].time;
      // let newMeetingDay: this.myProp.groups[newGroupNumber].meetings[0].day;
      // let newMeetingAddress: this.myProp.groups[newGroupNumber].meetings[0].address;
      // let newMeetingLocation: this.myProp.groups[newGroupNumber].meetings[0].location;
      // let newMeetingPointOfContact: this.myProp.groups[newGroupNumber].meetings[0].pointOfContact;
      // let newMeetingPhoneNumber: this.myProp.groups[newGroupNumber].meetings[0].phoneNumber;
      // let newMeetingMap: this.myProp.groups[newGroupNumber].meetings[0].mapLink;

      this.setState({
        currentGroup: newGroupNumber,
        bio: newBio,
        logo: newLogo,
        meetingTitle: newMeetingTitle
      });

    }

  render() {

    let logo = (this.state.logo);
    let paragraphs = [];
    let bio = (this.state.bio);
    let meetingTitle = (this.state.meetingTitle);
    console.log("I want this to be my state.title", this.state.meetingTitle)
    for (let i = 0; i < bio.length; i ++) {
      paragraphs.push(<p className="bio-paragraph" key= {i}>{bio[i]}</p>);
    }


    return (
        <div className="bio-paragraph">
          <h2>{meetingTitle}</h2>
          <div><img className="photo"src={logo}/></div>
          <div className="bio-paragraph">{paragraphs}</div>
          <button onClick={this.updateState}>Explore Groups</button>
        </div>

    )
  }
}


export default App;
