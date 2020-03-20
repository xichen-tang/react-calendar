import React from "react";
import "./signature.css";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";

class Signature extends React.Component {
  render() {
    const title = "Vend telefonen om for at underskrive køresedlen";
    const btnLabel = "Fortsæt";
    return (
      <div className="p-4">
        <div className="rotated-header d-flex">
          <p className="title">{title}</p>
          <button onClick={this.props.onClickContinue}>{btnLabel}</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickContinue: () => dispatch(setPageID(16))
  };
};

export default connect(null, mapDispatchToProps)(Signature);
