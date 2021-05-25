import PropTypes from "prop-types";
import styles from "./Congrats.module.css";

/**
 * Component to show congrats msg.
 * @param {object} props - Component props.
 * @returns {JSX.Element} - Rendered component (or null if `success` props is false).
 */
const Congrats = (props) => {
  return props.success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message" className={styles.congratsMsg}>
        Congrats, you guessed the word!
      </span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
