const fetch = require("node-fetch");

const swapi = require("./script2");

describe("swapi API", () => {
  test("calls swapi to get people", (done) => {
    expect.assertions(2);
    swapi.getPeoplePromise(fetch).then((data) => {
      expect(data.count).toBe(82);
      expect(data.results.length).toEqual(10);
      done();
    });
  });

  test("calls swapi to get people with async await", () => {
    expect.assertions(2);
    return swapi.getPeople(fetch).then((data) => {
      expect(data.count).toEqual(82);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
