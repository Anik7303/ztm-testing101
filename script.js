const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavouritecats.com",
  "myfavouritecats2.com",
];

const googleSearch = (searchInput, database = googleDatabase) => {
  const matches = database.filter((website) => website.includes(searchInput));
  return matches.slice(0, 3);
};

module.exports = googleSearch;
