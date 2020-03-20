import React from "react";
import "./back-month.css";

export default class BackMonth extends React.Component {
  render() {
    const navPrevUrl =
      "https://s3-alpha-sig.figma.com/img/8b17/be9b/1e7468181c2cf294251d6af69b71c2fe?Expires=1585526400&Signature=SVTEPr9BNMaGaE1WocAxHgs0e9QWgpYg2A5u6bqnB-ybkw0-Mmu5OM5JiJArNb-PfvMBrqznyiOfPl46a2ftmpWCUISz30qswarOmcCODgtBPALMjBrmQOfxsU03PiK-K~ivqgvrDYJPQ~bOV0G0PGOgUQRIHFF-AgnKq~QgX1cAEJpcKlpd6FAttdZkYhuROy8zOrrLM1oJaaEuKUMTyJtupix68lEpT323dQZmRI2xexf3VgA6rl9~pVcPJLZgz-mZR2MByTgAh1a2hFgab4HCFHdxj5lay~K2969~AQZYTf6o20QK5T9Sg6tU7r0pWT~tgMcYoscmqsB~Tk1knA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
    return (
      <button
        onClick={this.props.onClick}
        className="back-month d-flex justify-content-center pt-1"
      >
        <img src={navPrevUrl} alt="nav-prev button" />
        <span className="month-text">{this.props.month}</span>
      </button>
    );
  }
}
