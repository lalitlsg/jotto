import Congrats from "./components/congrats/Congrats";
import GuessedWords from "./components/guessedWords/GuessedWords";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <h2 className={styles.brandName}>Jotto</h2>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
