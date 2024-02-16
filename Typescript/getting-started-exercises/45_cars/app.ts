type CarType = {
  model: string;
  manufacturer: string;
  color?: string;
  neon_lights?: boolean;
};

function generateCar({ model, manufacturer, color, neon_lights }: CarType) {
  const car: CarType = { model, manufacturer };
  if (color) car.color = color;
  if (!!neon_lights) car.neon_lights = neon_lights;
  return car;
}

const car1 = generateCar({
  manufacturer: "Toyota",
  model: "Corolla",
});
const car2 = generateCar({
  manufacturer: "Suzuki",
  model: "Mehran",
  color: "white",
});
const car3 = generateCar({
  manufacturer: "Honda",
  model: "Civic",
  color: "silver",
  neon_lights: true,
});

console.log(car1);
console.log(car2);
console.log(car3);
