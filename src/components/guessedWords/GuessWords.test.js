import { shallow, ShallowWrapper } from "enzyme";
import { checkProps, findbyAttrTest } from "../../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create shallow wrapper for GuessWords component.
 * @param {object} props - Component props.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findbyAttrTest(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("show instructions to guess a word", () => {
    const instructions = findbyAttrTest(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "bat", letterMatchCount: 2 },
    { guessedWord: "party", letterMatchCount: 3 },
    { guessedWord: "camera", letterMatchCount: 4 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = findbyAttrTest(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test('renders "guessed words" section', () => {
    const guestWordsNode = findbyAttrTest(wrapper, "guessed-words");
    expect(guestWordsNode.length).toBe(1);
  });

  test("correct no of guessed words", () => {
    const guessedWordNodes = findbyAttrTest(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
