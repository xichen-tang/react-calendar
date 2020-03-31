import React from "react";

export default class FlowInput extends React.Component {
  render() {
    const { mode, label } = this.props;

    const InputView =
      mode === "datetime" ? (
        <input type="datetime" placeholder={label} />
      ) : (
        <input type="text" placeholder={label} />
      );

    return <div className="flow-input">{InputView}</div>;
  }
}
