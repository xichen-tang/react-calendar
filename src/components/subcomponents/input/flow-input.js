import React from "react";

export default class FlowInput extends React.Component {
  render() {
    return (
      <div className="flow-input">
        <input placeholder={this.props.label} />
      </div>
    );
  }
}
