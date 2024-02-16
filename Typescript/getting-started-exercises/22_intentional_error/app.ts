const countries = ["Canada", "Japan", "Palestine", "France", "Brazil"];

// for (let i = 0; i < countries.length + 1; i++) { // this line causes an index error
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  console.log("I want to visit", country);
}
