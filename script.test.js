const googleSearch = require("./script");

const mockDatabase = [
  "dogs.com",
  "cheesepuff.com",
  "disney.com",
  "dogpictures.com",
];

describe("googleSearch", () => {
  test("a silly test", () => {
    expect("hello").toBe("hello");
  });

  test("searching google", () => {
    expect.assertions();
    expect(googleSearch("testtest", mockDatabase)).toEqual([]);
    let result = googleSearch("dog", mockDatabase);
    expect(result.length).toBe(2);
    expect(result).toEqual(["dogs.com", "dogpictures.com"]);
  });

  test("work with undefined and null input", () => {
    expect.assertions(2);
    expect(googleSearch(undefined, mockDatabase)).toEqual([]);
    expect(googleSearch(null, mockDatabase)).toEqual([]);
  });

  test("does not return more than 3 matches", () => {
    expect(googleSearch(".com", mockDatabase).length).toBe(3);
    expect(googleSearch(".com", mockDatabase).length).toEqual(3);
  });
});
