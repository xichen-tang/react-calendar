import React from "react";
import "./main-header.css";
export default class MainHeader extends React.Component {
  render() {
    return (
      <div className="main-header text-center px-4 pb-4">
        <label>{this.props.title}</label>
      </div>
    );
  }
}
