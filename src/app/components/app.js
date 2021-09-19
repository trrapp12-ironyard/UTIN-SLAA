'use strict';

//import React from 'react';
//import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
//import Meeting from './Meeting';
//import Groups from './Groups';

//const jsonObject = require('../groups.json');
let jsonObject = [];

const e = React.createElement;

import Meeting from './Meeting.js';
//import Groups from './Groups';

class App extends React.Component {
  constructor() {
    super();
    
    this.updateState = this.updateState.bind(this);

    this.state = {
      currentGroup: -1,
      bio: "BIO",
      logo: "LOGO",
      meetingTitle: "TITLE",
      meetingTime: "MEETING TIME",
      meetings: "MEETINGS"
    };

    const module = this;

    $.ajax({
      url: 'http://localhost:8080/data/groups.json',
      async: false,
      dataType: 'json',
      success: function (response) {
        jsonObject = response;
        module.myProp = jsonObject;
        module.state = {
          currentGroup: 0,
          bio: module.myProp.groups[0].bio,
          logo: module.myProp.groups[0].logo,
          meetingTitle: module.myProp.groups[0].meetings[0].title,
          meetingTime: module.myProp.groups[0].meetings[0].time,
          meetings: module.myProp.groups[0].meetings
        };
      }
    });
  }

  updateState() {
    let newGroupNumber = (this.state.currentGroup + 1) % this.myProp.groups.length;
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
    let logo = this.state.logo;
    let bio = this.state.bio;
    let meetingTitle = this.state.meetingTitle;
    let meetingTime = this.state.meetingTime;
    console.log("I want this to be my state.title", this.state.meetingTitle);

    for (let i = 0; i < bio.length; i++) {
      paragraphs.push( /*#__PURE__*/React.createElement("p", {
        className: "bio-paragraph",
        key: i
      }, bio[i]));
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "bio-paragraph margins pvertmargins"
    }, /*#__PURE__*/React.createElement("div", {
      className: "textcenter"
    }, /*#__PURE__*/React.createElement("h1", null, "Twelve Step Groups in the SLC area")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, meetingTitle), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      align: "top",
      className: "photo pspacing",
      src: logo
    }), /*#__PURE__*/React.createElement("div", {
      className: "bio-paragraph pspacing"
    }, paragraphs)), /*#__PURE__*/React.createElement("div", {
      className: "fillwidth"
    }, /*#__PURE__*/React.createElement("div", {
      className: "meeting-paragraph meetingspacing textcenter"
    }, this.state.meetings.map(function (meeting, j) {
      return /*#__PURE__*/React.createElement(Meeting, {
        meeting: meeting,
        key: j
      });
    }))), /*#__PURE__*/React.createElement("div", {
      className: "textcenter"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btncenter btn btn-lg btn-default",
      onClick: this.updateState
    }, "Explore Groups")));
  }

}


export default App;

// <p>need `float:left` <b><i>and</i></b> text —not header, divs, etc. (i.e. use inline elems here, not block elems) <b><i>and</i></b> don't forget to `clear` your float!</p>
