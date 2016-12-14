import React from 'react';

export default class Meeting extends React.Component {
  render () {

    return (
      <div key={this.props.meeting.i}>
        {this.props.meeting.title}
      </div>
    )
  }
}
