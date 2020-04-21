import React from "react";
import MainHeader from "../subcomponents/header/main-header";
import FlowInput from "../subcomponents/input/flow-input";
import GeneralButton from "../subcomponents/button/general-btn";
import { useDispatch } from "react-redux";
import { setPageID } from "../../store/actions";
import {
  PAGE_INDEX,
  HEADERS,
  INPUT_LABELS,
  BUTTON_LABELS,
  BUTTON_MODES,
} from "../constant";

export default function SearchCustomer() {
  const dispatch = useDispatch();
  const onClickSearchCustomer = () =>
    dispatch(setPageID(PAGE_INDEX.CHOOSE_LICENSE_PLATE));
  const onClickManualMode = () =>
    dispatch(setPageID(PAGE_INDEX.ENTER_CUSTOMER_MANUALLY));

  const InputView = (
    <div className="mt-4">
      <FlowInput label={INPUT_LABELS.ssn} />
    </div>
  );
  const ButtonsView = (
    <div className="buttons text-center">
      <GeneralButton
        label={BUTTON_LABELS.search}
        mode={BUTTON_MODES.confirm}
        onClick={onClickSearchCustomer}
      />
      <GeneralButton
        label={BUTTON_LABELS.manual}
        mode={BUTTON_MODES.manual}
        onClick={onClickManualMode}
      />
    </div>
  );

  return (
    <div className="p-4">
      <MainHeader title={HEADERS.enterDriverCPR} />
      {InputView}
      {ButtonsView}
    </div>
  );
}
