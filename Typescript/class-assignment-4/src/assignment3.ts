// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.

// 1. Define an array named inventory to store product information.

type ProductType = {
  name: string;
  model: string;
  cost: number;
  quantity: number;
};

type InventoryType = ProductType[];

const inventory: InventoryType = [];

// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.

const product1: ProductType = {
  name: "Laptop",
  model: "MacBook Pro",
  cost: 1500,
  quantity: 10,
};

const product2: ProductType = {
  name: "Smartphone",
  model: "iPhone 12",
  cost: 1000,
  quantity: 20,
};

const product3: ProductType = {
  name: "Tablet",
  model: "iPad Pro",
  cost: 800,
  quantity: 15,
};

// 3. Add these product objects to the inventory array using an appropriate array method.

inventory.push(product1, product2, product3);

// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.

console.log(inventory[2].quantity);

// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

const product4: ProductType = {
  name: "Smartwatch",
  model: "Apple Watch",
  cost: 400,
  quantity: 30,
};

inventory.push(product4);

console.log(inventory[3].name);
