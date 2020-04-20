import React from "react";

export default function GeneralButton(props) {
  const generalBtnClass = "general-btn m-3 ";

  return (
    <button className={generalBtnClass + props.mode} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
