const locationsToVisit = [
  "Kyoto, Japan",
  "Banff National Park, Canada",
  "Santorini, Greece",
  "Machu Picchu, Peru",
  "Serengeti National Park, Tanzania",
];

console.log(locationsToVisit);
console.log([...locationsToVisit].sort());
console.log(locationsToVisit);
console.log([...locationsToVisit].sort().reverse());
console.log(locationsToVisit);
console.log(locationsToVisit.reverse());
console.log(locationsToVisit.reverse());

const alphabeticallySorted = [...locationsToVisit].sort();
console.log(alphabeticallySorted);
const reverseAlphabeticallySorted = [...locationsToVisit].sort().reverse();
console.log(reverseAlphabeticallySorted);
