import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  BUTTON_MODES,
  BUTTON_LABELS,
  HEADERS,
  SUB_HEADERS,
  DESCRIPTIONS,
  PAGE_INDEX,
} from "../constant";

function TermsConditions(props) {
  const TermsConditionsView = (
    <div className="p-5">
      <div className="header p-2">{SUB_HEADERS.termsAndConditions}</div>
      <div className="body mt-3">
        {DESCRIPTIONS.termsAndConditions.map((desc, id) => (
          <p key={id}>{desc}</p>
        ))}
      </div>
    </div>
  );

  const YesNoButtons = (
    <div className="d-flex justify-content-between my-3 mx-4">
      <GeneralButton
        label={BUTTON_LABELS.no}
        mode={BUTTON_MODES.confirm}
        onClick={props.onClickYes}
      />
      <GeneralButton
        label={BUTTON_LABELS.yes}
        mode={BUTTON_MODES.confirm}
        onClick={props.onClickNo}
      />
    </div>
  );

  return (
    <div className="p-4">
      <MainHeader title={HEADERS.termsAndConditions} />
      {TermsConditionsView}
      {YesNoButtons}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickYes: () => dispatch(setPageID(PAGE_INDEX.SIGNATURE)),
    onClickNo: () => dispatch(setPageID(PAGE_INDEX.START_PAGE)),
  };
};

export default connect(null, mapDispatchToProps)(TermsConditions);
