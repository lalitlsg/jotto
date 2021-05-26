import { getLetterMatchCount } from ".";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("returns correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test("return correct count when there are 3 matching latters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test("return correct count when there are duplicate letters in guessed words", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
