import { correctGuess, actionTypes } from "./";

describe("correct guess", () => {
  test("return an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
