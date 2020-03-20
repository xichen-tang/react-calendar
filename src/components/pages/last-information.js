import React from "react";
import "./last-information.css";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import FlowInput from "../subcomponents/input/flow-input";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";

class LastInformation extends React.Component {
  render() {
    return (
      <div className="p-4">
        <MainHeader title="Indtast de manglende oplysninger" />

        <div className="last-information p-5">
          <div className="personal-info">
            <span>Navn Navnesen</span> <br />
            <span>Adresse</span> <br />
            <span>Postnr By</span>
          </div>
        </div>

        <div className="personal-input">
          <FlowInput label="Telefonnummer" />
          <FlowInput label="E-mailadresse" />
        </div>

        <div className="d-flex justify-content-around personal-business px-4 py-2">
          <button className="mode-btn">Privat</button>
          <button className="mode-btn">Erhverv</button>
        </div>

        <div className="d-flex justify-content-center m-5">
          <i className="m-2">+</i>
          <span className="m-2">Tilføj flere førere</span>
        </div>

        <div className="duration">
          <FlowInput label="Varighed (Normalt 30 min)" />
        </div>

        <div className="buttons text-center">
          <GeneralButton
            label="Fortsæt"
            mode="choose"
            onClick={this.props.onClickContinue}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickContinue: () => dispatch(setPageID(13))
  };
};

export default connect(null, mapDispatchToProps)(LastInformation);
