import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setPageID, setSignature } from "../../store/actions";
import { PAGE_INDEX, HEADERS, BUTTON_LABELS } from "../constant";
import SignatureCanvas from "react-signature-canvas";

function Signature(props) {
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    updateClientRect();
    window.addEventListener("resize", updateClientRect);
    return function cleanup() {
      window.removeEventListener("resize", updateClientRect);
    };
  });

  const updateClientRect = () => {
    setClientWidth(window.innerWidth);
    setClientHeight(window.innerHeight);
  };

  let sigPad = {};

  const clear = () => {
    sigPad.clear();
  };

  const onClickContinue = () => {
    props.saveSignature(sigPad.getTrimmedCanvas().toDataURL("image/png"));
    props.onClickContinue();
  };

  const HeaderView = (
    <div className="rotated-header d-flex">
      <p>{HEADERS.flipPhoneToSign}</p>
      <button onClick={onClickContinue}>{BUTTON_LABELS.continue}</button>
    </div>
  );

  const SignatureView = (
    <SignatureCanvas
      penColor="blue"
      canvasProps={{ width: clientWidth, height: clientHeight }}
      ref={(ref) => {
        sigPad = ref;
      }}
    />
  );

  const ClearSignature = (
    <button className="clear-sign" onClick={clear}>
      Clear
    </button>
  );

  return (
    <div className="p-4 position-relative w-100 vh-100 signature">
      {HeaderView}
      {SignatureView}
      {ClearSignature}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveSignature: (url) => dispatch(setSignature(url)),
    onClickContinue: () => dispatch(setPageID(PAGE_INDEX.DONE)),
  };
};

export default connect(null, mapDispatchToProps)(Signature);
