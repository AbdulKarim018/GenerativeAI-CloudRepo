const unchangedMagicians = ["john", "eric", "max"];

function show_magicians(magicians: string[]) {
  return magicians.forEach((magician) => console.log(magician));
}
function make_great(magicians: string[]) {
  return magicians.map(
    (magician, index) => (magicians[index] = magician + " the great")
  );
}

console.log("Before calling make-great");
show_magicians(unchangedMagicians);
const changedMagicians = make_great([...unchangedMagicians]);
console.log("After calling make-great");
show_magicians(unchangedMagicians);
show_magicians(changedMagicians);
