const fetch = require("node-fetch");

const baseurl = "https://swapi.dev/api";

const getPeoplePromise = (f = fetch) =>
  f(`${baseurl}/people`)
    .then((res) => res.json())
    .then(({ count, results }) => ({ count, results }));

const getPeople = async (f = fetch) => {
  const response = await f(`${baseurl}/people`);
  const data = await response.json();
  return { count: data.count, results: data.results };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
