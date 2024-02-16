function game(alien_color: "green" | "yellow" | "red") {
  if (alien_color === "green") {
    console.log("You earned 5 points!");
  } else if (alien_color === "yellow") {
    console.log("You earned 10 points!");
  } else if (alien_color === "red") {
    console.log("You earned 15 points!");
  }
}

// Using Switch-Case Statement

// function game(alienColor: "green" | "yellow" | "red") {
//   switch (alienColor) {
//     case "green":
//       console.log("You earned 5 points!");
//       break;
//     case "yellow":
//       console.log("You earned 10 points!");
//       break;
//     case "red":
//       console.log("You earned 15 points!");
//       break;
//     default:
//       break;
//   }
// }

game("green"); // Game 1
game("yellow"); // Game 2
game("red"); // Game 3
