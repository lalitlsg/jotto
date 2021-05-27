import moxios, { requests } from "moxios";
import { getSecretWord } from ".";
import { storeFactory } from "../../../test/testUtils";

// import { correctGuess, actionTypes } from "./";

// describe("correct guess", () => {
//   test("return an action with type `CORRECT_GUESS`", () => {
//     const action = correctGuess();
//     expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
//   });
// });

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("add response word to test", async () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord());
    const newState = store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });
});
