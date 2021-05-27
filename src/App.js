import { Component } from "react";
import { connect } from "react-redux";
import Congrats from "./components/congrats/Congrats";
import GuessedWords from "./components/guessedWords/GuessedWords";
import styles from "./App.module.css";
import { getSecretWord } from "./store/actions";
import Input from "./components/input/Input";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className={styles.app}>
        <h2 className={styles.brandName}>Jotto</h2>
        <div>The Secret Word: {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, secretWord, guessedWords } = state;
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
