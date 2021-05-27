import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../../store/actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
  }

  submitGuessedWord = (e) => {
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord) {
      this.props.guessWord(guessedWord);
    }
    this.inputBox.current.value = "";
  };

  render() {
    const content = this.props.success ? null : (
      <form>
        <input
          ref={this.inputBox}
          data-test="input-box"
          placeholder="enter guess"
        />
        <button data-test="submit-button" onClick={this.submitGuessedWord}>
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
