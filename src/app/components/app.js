import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Meeting from './Meeting.js';
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

      // meetingDay: this.myProp.groups[0].meetings[0].day,
      // meetingAddress: this.myProp.groups[0].meetings[0].address,
      // meetingLocation: this.myProp.groups[0].meetings[0].location,
      // meetingPointOfContact: this.myProp.groups[0].meetings[0].pointOfContact,
      // meetingPhoneNumber: this.myProp.groups[0].meetings[0].phoneNumber,
      // meetingMap: this.myProp.groups[0].meetings[0].mapLink

    };
    console.log("this should be my this.myProp.groups[0].meetings.meetings" + this.myProp.groups[0].meetings)
    console.log("this should be the original.state meeting time" + this.state.meetingTime)
    this.updateState = this.updateState.bind(this)

    }

    updateState() {

      let newGroupNumber = (this.state.currentGroup +1)% this.myProp.groups.length;
      let newBio = this.myProp.groups[newGroupNumber].bio;
      let newLogo = this.myProp.groups[newGroupNumber].logo;
      let newMeetingTitle = this.myProp.groups[newGroupNumber].meetings[0].title;
      console.log(this.myProp.groups[0].meetings[0].title)
      console.log(newMeetingTitle);
      let newMeetingTime = this.myProp.groups[newGroupNumber].meetings[0].time;
      console.log("This should be the new meeting time", + this.state.newMeetingTime);
      let newMeetings = this.myProp.groups[newGroupNumber].meetings;

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
        meetingTitle: newMeetingTitle,
        meetingTime: newMeetingTime,
        individualMeetingInfo: newIndividualMeetingInfo,
        meetings: newMeetings
      });

    }

  render() {

    let paragraphs = [];
    let meetingGroupArr = [];
    let logo = (this.state.logo);
    let bio = (this.state.bio);
    let meetingTitle = (this.state.meetingTitle);
    let meetingTime = (this.state.meetingTime);
    let individualMeetingInfo = (this.state.individualMeetingInfo)
    console.log("I want this to be my state.title", this.state.meetingTitle)
    for (let i = 0; i < bio.length; i ++) {
      paragraphs.push(<p className="bio-paragraph" key= {i}>{bio[i]}</p>);
    }
    // for (let j = 0; j < this.myProp.groups[newGroupNumber].meetings.length; j++) {
    //   meetingGroupArr.push(<p key= {j}>{title[j]}</p>)

      // "time": "6:30 - 7:30 P.M.",
      // "day": "Monday",
      // "address": "248 E 3900 S",
      // "location": "N/A",
      // "pointOfContact": "Mike D",
      // "phoneNumber": "(801)-240-6243",
      // "mapLink": "url"}



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
