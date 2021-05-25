import PropTypes from "prop-types";
import styles from "./GuessedWords.module.css";

const GuessedWords = (props) => {
  let content =
    props.guessedWords.length === 0 ? (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    ) : (
      <div data-test="guessed-words">
        <h2>Guessed Words</h2>
        <table>
          <thead>
            <tr>
              <th className={styles.thead}>Word</th>
              <th className={styles.thead}> Matching Letters</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {props.guessedWords.map((w, i) => (
              <tr data-test="guessed-word" key={i}>
                <td className={styles.tr}>{w.guessedWord}</td>
                <td className={styles.tr}>{w.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
