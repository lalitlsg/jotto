import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../../store/actions";

class Input extends Component {
  render() {
    const content = this.props.success ? null : (
      <form>
        <input data-test="input-box" placeholder="enter guess" />
        <button data-test="submit-button">Submit</button>
      </form>
    );
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(Input);
