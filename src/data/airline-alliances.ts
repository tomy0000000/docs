import airlines from "@site/src/data/airlines.json";

const alliances = {};
Object.values(airlines).forEach((airline) => {
  if (airline.alliance) {
    const { countries, alliance } = airline;
    const countriesKey = countries.join(",");
    if (!(countriesKey in alliances)) {
      alliances[countriesKey] = { countries: countriesKey };
    }
    if (!(alliance in alliances[countriesKey])) {
      alliances[countriesKey][alliance] = [];
    }
    alliances[countriesKey][alliance].push(airline);
  }
});

export default Object.values(alliances);
