'use strict';

const e = React.createElement;


class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
      'div',
      {},
      '{}'
    );
  }
}

export default Groups;

// export default class Groups extends React.Component {
//   render () {
//
//     return (
//       <div key={this.props.meeting.i}>
//
//       </div>
//     )
//   }
// }
