import React from 'react';

export default class Meeting extends React.Component {
  render () {

    return (
      <div className="meeting-border" key={this.props.meeting.i}>
        <h4><p className="underline">{this.props.meeting.title}</p></h4>
        <p>Time: {this.props.meeting.time}</p>
        <p>Day: {this.props.meeting.day}</p>
        <p>Address: {this.props.meeting.address}</p>
        <p>Location: {this.props.meeting.location}</p>
        <p>Point of Contact: {this.props.meeting.pointOfContact}</p>
        <p> Phone Number: {this.props.meeting.phoneNumber}</p>
        <br/>
      </div>
    )
  }
}
