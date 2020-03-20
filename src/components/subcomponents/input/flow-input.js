import React from "react";
import "./flow-input.css";

export default class FlowInput extends React.Component {
  render() {
    return (
      <div className="flow-input m-5">
        <input placeholder={this.props.label} />
      </div>
    );
  }
}
