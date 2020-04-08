import React from "react";
import { connect } from "react-redux";
import { setPageID, setSignature } from "../../store/actions";
import { PAGE_INDEX, HEADERS, BUTTON_LABELS } from "../constant";
import SignatureCanvas from "react-signature-canvas";

class Signature extends React.Component {
  state = {
    clientWidth: 0,
    clientHeight: 0
  };

  componentDidMount() {
    this.updateClientRect();
    window.addEventListener("resize", this.updateClientRect);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateClientRect);
  }

  updateClientRect = () => {
    this.setState({
      clientWidth: window.innerWidth,
      clientHeight: window.innerHeight
    });
  };

  sigPad = {};

  clear = () => {
    this.sigPad.clear();
  };

  onClickContinue = () => {
    this.props.saveSignature(
      this.sigPad.getTrimmedCanvas().toDataURL("image/png")
    );
    this.props.onClickContinue();
  };

  render() {
    const HeaderView = (
      <div className="rotated-header d-flex">
        <p>{HEADERS.flipPhoneToSign}</p>
        <button onClick={this.onClickContinue}>{BUTTON_LABELS.continue}</button>
      </div>
    );

    const { clientWidth, clientHeight } = this.state;

    const SignatureView = (
      <SignatureCanvas
        penColor="blue"
        canvasProps={{ width: clientWidth, height: clientHeight }}
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
      <div className="p-4 position-relative w-100 vh-100 signature">
        {HeaderView}
        {SignatureView}
        {ClearSignature}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveSignature: url => dispatch(setSignature(url)),
    onClickContinue: () => dispatch(setPageID(PAGE_INDEX.DONE))
  };
};

export default connect(null, mapDispatchToProps)(Signature);
