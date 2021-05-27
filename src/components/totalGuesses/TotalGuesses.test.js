import { shallow, ShallowWrapper } from "enzyme";
import { checkProps } from "../../../test/testUtils";
import TotalGuesses from "./TotalGuesses";

const defaultProps = {
  totalGuesses: 3,
};

/**
 * Factory function to create shallow wrapper for TotalGuesses component.
 * @param {object} props - Component props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

test("does not throw warning with expected prop", () => {
  checkProps(TotalGuesses, defaultProps);
});
