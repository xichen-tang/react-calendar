import React from "react";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import { PAGE_INDEX, HEADERS, BUTTON_LABELS } from "../constant";
import SignatureCanvas from "react-signature-canvas";

class Signature extends React.Component {
  state = {
    trimmedDataURL: null
  };

  sigPad = {};

  clear = () => {
    this.sigPad.clear();
  };

  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png")
    });
    this.props.onClickContinue();
  };

  render() {
    const HeaderView = (
      <div className="rotated-header d-flex">
        <p>{HEADERS.flipPhoneToSign}</p>
        <button onClick={this.trim}>{BUTTON_LABELS.continue}</button>
      </div>
    );

    const SignatureView = (
      <SignatureCanvas
        penColor="blue"
        canvasProps={{ width: 635, height: 250 }}
        ref={ref => {
          this.sigPad = ref;
        }}
      />
    );

    const ClearSignature = (
      <button className="clear-sign" onClick={this.clear}>
        Clear
      </button>
    );

    return (
      <div className="p-4 position-relative">
        {HeaderView}
        {SignatureView}
        {ClearSignature}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickContinue: () => dispatch(setPageID(PAGE_INDEX.DONE))
  };
};

export default connect(null, mapDispatchToProps)(Signature);
