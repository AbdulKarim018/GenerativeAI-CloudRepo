const transports = [
  { vehicle: "Motorcycle", company: "Hayabusa" },
  { vehicle: "Car", company: "Bugatti" },
  { vehicle: "Yacht", company: "Ferretti" },
  { vehicle: "Boat", company: "Yamaha" },
];

for (let i = 0; i < transports.length; i++) {
  console.log(
    `I would like to own a ${transports[i].company} ${transports[i].vehicle}.`
  );
}
