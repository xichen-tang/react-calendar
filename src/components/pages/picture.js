import React from "react";
import "./picture.css";
import MainHeader from "../subcomponents/header/main-header";
import GeneralButton from "../subcomponents/button/general-btn";
import { connect } from "react-redux";
import { setPageID } from "../../store/actions";

class Picture extends React.Component {
  render() {
    const description = `
    Vi skal kunne dokumentere prøvekørslen overfor de ansvarlige
          myndigheder og derfor skal vi bede dig om, at tage et billede af
          førerens kørekort med kameraet i din smartphone.
    `;
    return (
      <div className="p-4">
        <MainHeader title="Vi skal bruge et billede af kørekortet" />
        <div className="description p-4">{description}</div>
        <div className="continue-button text-center">
          <GeneralButton
            label="Kamera"
            mode="choose"
            onClick={this.props.onClickTakePicture}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickTakePicture: () => dispatch(setPageID(14))
  };
};

export default connect(null, mapDispatchToProps)(Picture);
