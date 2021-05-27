import { shallow, ShallowWrapper } from "enzyme";
import { findbyAttrTest, storeFactory } from "../../../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

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

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("`guessWord action creator is a function prop`", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("guess word action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";
  beforeEach(() => {
    guessWordMock = jest.fn();
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);
    wrapper.instance().inputBox.current = { value: guessedWord };
    const submitButton = findbyAttrTest(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("`guessWord` runs on submit click", () => {
    const getGuessWordCallCount = guessWordMock.mock.calls.length;
    expect(getGuessWordCallCount).toBe(1);
  });

  test("call `guessWord` with input value as argument", () => {
    const expectedGuessedWord = guessWordMock.mock.calls[0][0];
    expect(expectedGuessedWord).toBe(guessedWord);
  });

  test("input box clears on submit", () => {
    expect(wrapper.instance().inputBox.current.value).toBe("");
  });
});
