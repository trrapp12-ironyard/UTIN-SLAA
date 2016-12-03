import React from 'react';

class BioComponent extends React.Component {
  
  render() {
    return (
      <div className="groupParentInformation">
        <h1>Bio info {this.props.string}</h1>
      </div>
    )
  }
}

export default BioComponent;
