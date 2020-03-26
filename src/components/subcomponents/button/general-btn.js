import React from "react";

export default class GeneralButton extends React.Component {
  render() {
    const generalBtnClass = "general-btn m-3 ";

    return (
      <button
        className={generalBtnClass + this.props.mode}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}
