function game(alien_color: "green" | "yellow" | "red") {
  if (alien_color === "green") {
    console.log("You earned 5 points!");
  } else {
    console.log("You earned 10 points!");
  }
}

game("green"); // Game 1
game("yellow"); // Game 2
