// 3. Counter Incrementer (Using do while loop )
// Objective: Create a program that increments a counter by a specified step value using a
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.

// Steps to Follow:

// 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.

let counter = 0;

// 2. Create a variable, step, to increase your counter by: Define a variable step to hold
// the value by which the counter will be incremented.

const step = 10;

// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by
// the step amount each iteration.

do {
  counter += step;
  if (counter === 100) {
    console.log(counter);
  }
  // 4. Continue to loop until the counter is equal to or more than 100: The loop should run
  // as long as the counter is less than 100.
} while (counter <= 100);
