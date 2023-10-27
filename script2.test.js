const swapi = require("./script2");

let mockFetch;

describe("swapi API", () => {
  beforeEach(() => {
    mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 82,
            results: Array.from({ length: 10 }, (_, i) => i),
          }),
      })
    );
  });

  test("calls swapi to get people", (done) => {
    expect.assertions(2);
    swapi.getPeoplePromise(mockFetch).then((data) => {
      expect(data.count).toBe(82);
      expect(data.results.length).toEqual(10);
      done();
    });
  });

  test("calls swapi to get people with async await", () => {
    expect.assertions(2);
    return swapi.getPeople(mockFetch).then((data) => {
      expect(data.count).toEqual(82);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });

  test("getPeople returns count and results", () => {
    expect.assertions(5);
    return swapi.getPeople(mockFetch).then((data) => {
      expect(data.count).toEqual(82);
      expect(data.results.length).toBeGreaterThan(5);
      expect(data.results).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
    });
  });
});
