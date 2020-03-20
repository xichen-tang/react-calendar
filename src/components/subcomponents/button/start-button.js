import React from "react";
import "./start-button.css";
import { buttonLabels } from "../../constant";

export default class StartButton extends React.Component {
  render() {
    const styleButton =
      this.props.label === buttonLabels[0]
        ? {
            marginTop: "250px"
          }
        : {
            marginTop: "65px"
          };

    return (
      <div className="d-flex justify-content-center " style={styleButton}>
        <button onClick={this.props.onClick} className="main-btn border-0">
          {this.props.label}
        </button>
      </div>
    );
  }
}
