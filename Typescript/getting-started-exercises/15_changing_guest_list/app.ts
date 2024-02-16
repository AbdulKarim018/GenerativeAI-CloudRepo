let guestList = ["Mom", "Dad", "Sister No.1", "Sister No.2 "];

const excusedGuest = guestList.splice(2, 1, "Grand Mother");
for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(
    `
    Dear ${guest},
    Join me for a delightful evening of culinary delights and great company at our dinner gathering. Your presence will make the occasion truly special.`
  );
}
console.log("\n", excusedGuest[0], "could'nt make it :(");
