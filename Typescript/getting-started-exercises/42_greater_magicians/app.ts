const magicians = ["john", "eric", "max"];

function show_magicians(magicians: string[]) {
  return magicians.forEach((magician) => console.log(magician));
}
function make_great() {
  return magicians.forEach(
    (magician, index) => (magicians[index] = magician + " the great")
  );
}

console.log("Before calling make-great");
show_magicians(magicians);
make_great();
console.log("After calling make-great");
show_magicians(magicians);
