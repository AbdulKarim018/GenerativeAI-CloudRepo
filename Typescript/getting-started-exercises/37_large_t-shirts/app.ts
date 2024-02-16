type make_shirt_params = {
  size?: "sm" | "md" | "lg" | "xl";
  message?: string;
};

function make_shirt({
  size = "lg",
  message = "I Love TypeScript",
}: make_shirt_params = {}) {
  console.log(
    `A T-Shirt is to be made of size ${size} with the text "${message}"`
  );
}

make_shirt();
make_shirt({
  size: "md",
});
make_shirt({
  size: "md",
  message: "My name is Abdul Karim.",
});
