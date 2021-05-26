import { shallow } from "enzyme";
import { findbyAttrTest, storeFactory } from "../../../test/testUtils";
import Input from "./Input";

/**
 * Factory fuction to create ShallowWrapper for Input Component.
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

setup();

describe("render", () => {
  describe("word has not been guessed", () => {
    test("render without error", () => {});
    test("render input box", () => {});
    test("render submit button", () => {});
  });
  describe("word has been guessed", () => {
    test("render without error", () => {});
    test("does not render input box", () => {});
    test("does not render submit button", () => {});
  });
});

describe("update state", () => {});
