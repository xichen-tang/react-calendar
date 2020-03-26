import React from "react";
export default class MainHeader extends React.Component {
  render() {
    return (
      <div className="main-header text-center">
        <label>{this.props.title}</label>
      </div>
    );
  }
}
