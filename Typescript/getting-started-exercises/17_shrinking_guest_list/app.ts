const guestList = [
  "Grand Mother",
  "Mom",
  "Grand Father",
  "Dad",
  "Sister No.1",
  "Sister No.2 ",
  "Friend No.1",
];

console.log("\nSorry, I can invite only two people for dinner. \n");

for (let i = 0; 2 < guestList.length; i++) {
  const guest = guestList.pop();
  console.log(`Sorry ${guest}, I won't be able to invite you :(`);
}

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(
    `
    Dear ${guest},
    Join me for a delightful evening of culinary delights and great company at our dinner gathering. Your presence will make the occasion truly special.`
  );
}

guestList.pop();
guestList.pop();
console.log(guestList);
