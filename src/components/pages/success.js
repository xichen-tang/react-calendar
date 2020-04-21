import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { setPageID } from "../../store/actions";
import { useDispatch } from "react-redux";
import {
  PAGE_INDEX,
  DESCRIPTIONS,
  BUTTON_LABELS,
  HEADERS,
  BUTTON_MODES,
} from "../constant";

export default function Success(props) {
  const dispatch = useDispatch();
  const handleClickDone = () => dispatch(setPageID(PAGE_INDEX.START_PAGE));

  const DescriptionView = (
    <div className="p-5">
      <p>{DESCRIPTIONS.success}</p>
    </div>
  );
  const SuccessButton = (
    <div className="continue-button text-center">
      <GeneralButton
        label={BUTTON_LABELS.close}
        mode={BUTTON_MODES.confirm}
        onClick={handleClickDone}
      />
    </div>
  );

  return (
    <div className="p-4">
      <MainHeader title={HEADERS.done} />
      {DescriptionView}
      {SuccessButton}
    </div>
  );
}
