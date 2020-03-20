import React from "react";
import "./search-customer.css";
import MainHeader from "../subcomponents/header/main-header";
import FlowInput from "../subcomponents/input/flow-input";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";

class SearchCustomer extends React.Component {
  render() {
    return (
      <div className="p-4">
        <MainHeader title="Skriv førerens CPR-nummer" />
        <div className="mt-4">
          <FlowInput label="CPR-nummer" />
        </div>
        <div className="buttons text-center">
          <GeneralButton
            label="Søg"
            mode="choose"
            onClick={this.props.onClickSearchCustomer}
          />
          <GeneralButton
            label="Manuel indtastning"
            mode="manual"
            onClick={this.props.onClickManualMode}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickTimeSlot: () => dispatch(setPageID(10)),
    onClickSearchCustomer: () => dispatch(setPageID(11))
  };
};

export default connect(null, mapDispatchToProps)(SearchCustomer);
