const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (numbers.findIndex((val) => val === num) === 0) {
    console.log(num + "st");
    continue;
  }
  if (numbers.findIndex((val) => val === num) === 1) {
    console.log(num + "nd");
    continue;
  }
  if (numbers.findIndex((val) => val === num) === 2) {
    console.log(num + "rd");
    continue;
  }
  console.log(num + "th");
}
