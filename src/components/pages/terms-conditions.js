import React from "react";
import "./terms-conditions.css";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";

class TermsConditions extends React.Component {
  render() {
    return (
      <div className="p-4">
        <MainHeader title="Det her er vigtigt! Betingelser og samtykke" />

        <div className="description p-5">
          <div className="header p-2">Vilkår og betingelser</div>
          <div className="body mt-3">
            <p>
              Vi vil gerne have lov til at kontakte dig efter din prøvekørsel,
              for at følge op på din oplevelse, og sende vores nyhedsbrev, med
              nyheder, tilbud og artikler fra BMW.{" "}
            </p>

            <p>
              Herudover indsamler vi data til brug for dokumentation og analyse.
            </p>
            <p>
              Ovenstående er det grundlæggende i vores Vilkår og Betingelser.
            </p>
            <p>Du kan læse mere om vores vilkår og betingelser her.</p>
            <p>Vil Du acceptere vores vilkår og betingelser?</p>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3 mx-4">
          <GeneralButton
            label="Nej"
            mode="choose"
            onClick={this.props.onClickYes}
          />
          <GeneralButton
            label="Ja"
            mode="choose"
            onClick={this.props.onClickNo}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickYes: () => dispatch(setPageID(15)),
    onClickNo: () => dispatch(setPageID(15))
  };
};

export default connect(null, mapDispatchToProps)(TermsConditions);
