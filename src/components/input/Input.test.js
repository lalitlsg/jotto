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
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("render without error", () => {
      const component = findbyAttrTest(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("render input box", () => {
      const inputBox = findbyAttrTest(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("render submit button", () => {
      const submitButton = findbyAttrTest(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("render without error", () => {
      const component = findbyAttrTest(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not render input box", () => {
      const inputBox = findbyAttrTest(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitButton = findbyAttrTest(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("update state", () => {});
