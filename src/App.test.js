import { shallow } from "enzyme";
import { storeFactory } from "../test/testUtils";
import App, { UnconnectedApp } from "./App";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux properties", () => {
  test("has access to `success` prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("has access to `secretWord` prop", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test("has access to `guessedWords` prop", () => {
    const guessedWords = [
      {
        guessedWord: "train",
        letterMatchCount: 3,
      },
    ];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test("`getSecretWord` action creator is a function on the props", () => {
    const wrapper = setup({});
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test("getSecretWord runs on app mount", () => {
  const getSecretWordMock = jest.fn();
  const wrapper = shallow(<UnconnectedApp getSecretWord={getSecretWordMock} />);
  wrapper.instance().componentDidMount();
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
