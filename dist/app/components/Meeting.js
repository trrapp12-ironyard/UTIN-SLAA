'use strict';

class Meeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  
  render() {
    
    let br = React.createElement("br");
    let phoneNumber = React.createElement("p", null, " Phone Number: ", this.props.meeting.phoneNumber);
    let pointOfContact = React.createElement("p", null, "Point of Contact: ", this.props.meeting.pointOfContact);
    let location = React.createElement("p", null, "Location: ", this.props.meeting.location);
    let address = React.createElement("p", null, "Address: ", this.props.meeting.address);
    let day = React.createElement("p", null, "Day: ", this.props.meeting.day);
    let time = React.createElement("p", null, "Time: ", this.props.meeting.time);

    return /*#__PURE__*/React.createElement("div", {
      className: "meeting-border",
      key: this.props.meeting.i
    }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("p", {
      className: "underline"
    }, this.props.meeting.title)), time, day, address, location, pointOfContact, phoneNumber, br);
  }
}

export default Meeting;
