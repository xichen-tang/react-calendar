import React from "react";
import "./success.css";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { setPageID } from "../../store/actions";
import { connect } from "react-redux";

class Success extends React.Component {
  render() {
    return (
      <div className="p-4">
        <MainHeader title="Færdig!" />
        <div className="p-5">
          <p>
            Prøvekørslen er nu oprettet og køresedlen er sendt som en SMS til
            det oplyste telefonnummer.
          </p>
        </div>
        <div className="continue-button text-center">
          <GeneralButton
            label="Luk"
            mode="choose"
            onClick={this.props.onClickDone}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickDone: () => dispatch(setPageID(0))
  };
};

export default connect(null, mapDispatchToProps)(Success);
