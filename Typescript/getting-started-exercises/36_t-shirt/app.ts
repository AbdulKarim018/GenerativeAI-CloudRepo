function make_shirt(size: "sm" | "md" | "lg" | "xl", message: string) {
  console.log(`
  A T-Shirt is to be made of size ${size} with the text "${message}"
  `);
}

make_shirt("lg", "My name is Abdul Karim.");
