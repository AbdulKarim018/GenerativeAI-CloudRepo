const guestList = ["Mom", "Dad", "Sister", "Sister No.2"];

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(
    `
    Dear ${guest},
    Join me for a delightful evening of culinary delights and great company at our dinner gathering. Your presence will make the occasion truly special.`
  );
}
