import React from "react";

export default function FlowInput(props) {
  const { mode, label } = props;

  const InputView =
    mode === "datetime" ? (
      <input type="datetime" placeholder={label} />
    ) : (
      <input type="text" placeholder={label} />
    );

  return <div className="flow-input">{InputView}</div>;
}
