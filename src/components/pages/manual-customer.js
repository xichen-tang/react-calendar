import React from "react";
import FlowInput from "../subcomponents/input/flow-input";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";

export default class ManualCustomer extends React.Component {
  render() {
    const inputArray = [
      "Navn",
      "Efternavn",
      "Gade",
      "Husnummer",
      "Postnummer",
      "By"
    ];

    return (
      <div className="p-4">
        <MainHeader title="Skriv førerens oplysninger manuelt" />
        <div className="input-fields p-3 text-center">
          {inputArray.map((inputLabel, id) => (
            <FlowInput key={id} label={inputLabel} />
          ))}
        </div>
        <div className="text-center mt-3">
          <GeneralButton label="Fortsæt" mode="choose" />
        </div>
      </div>
    );
  }
}
