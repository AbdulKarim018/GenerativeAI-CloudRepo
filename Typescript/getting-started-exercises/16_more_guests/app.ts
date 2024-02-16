let guestList = ["Mom", "Dad", "Sister No.1", "Sister No.2 "];

// prepending at the first index
guestList.unshift("Grand Mother");

// adding at the center
guestList = [
  ...guestList.slice(0, Math.floor(guestList.length / 2)),
  "Grand Father",
  ...guestList.slice(Math.floor(guestList.length / 2), guestList.length),
];

// appending at the end
guestList.push("Friend No.1");

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(
    `
    Dear ${guest},
    Join me for a delightful evening of culinary delights and great company at our dinner gathering. Your presence will make the occasion truly special.`
  );
}

console.log("\n Hey Everyone, I have a found a Bigger Dinner Table!");
// console.log(guestList)
