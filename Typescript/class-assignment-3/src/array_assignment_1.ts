// Part 1: Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.

// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.

type Product = {
  name: string;
  price: number;
  color?: string;
  inventory: {
    stock: number;
    colorOptions: string[];
  };
};

// 2. Create an array named products containing at least three product objects. Each
// product object should include a name, price, and inventory details.

const products: Product[] = [
  {
    name: "Product 1",
    price: 100,
    inventory: {
      stock: 10,
      colorOptions: ["red", "blue", "green"],
    },
  },
  {
    name: "Product 2",
    price: 200,
    inventory: {
      stock: 20,
      colorOptions: ["red", "blue", "green"],
    },
  },
  {
    name: "Product 3",
    price: 300,
    inventory: {
      stock: 30,
      colorOptions: ["red", "blue", "green"],
    },
  },
];

// 3. Implement a function named changeColor that takes a product object and a new
// color as input. This function should update the color property of the product and
// adjust the price based on the new color (implement your own logic, e.g., increase by
// 10% for red, decrease by 5% for blue).

const changeColor = (product: Product, color: string) => {
  if (!product.inventory.colorOptions.includes(color)) {
    console.error("Sorry, This color is not available");
  }

  switch (color) {
    case "red":
      product.price += (product.price / 100) * 10;
      break;
    case "blue":
      product.price += (product.price / 100) * 5;
      break;
  }
  return product;
};

// 4. Display each product's name, price, stock, and available colors. Iterate through the
// products array and print each product's details.

for (let product of products) {
  // console.log(product);
}

// Extra: Calling the changeColor function

const updatedProduct1 = changeColor(
  {
    name: "Shirt",
    price: 400,
    inventory: {
      stock: 47,
      colorOptions: ["yellow", "red", "blue"],
    },
  },
  "red"
);

const updatedProduct2 = changeColor(
  {
    name: "Shirt",
    price: 400,
    inventory: {
      stock: 47,
      colorOptions: ["yellow", "red", "blue"],
    },
  },
  "blue"
);

// red color increases price by 10%
// console.log(updatedProduct1);

// blue color increases price by 5%
// console.log(updatedProduct2);

// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.

// 1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.

type Student = {
  name: string;
  grades: number[];
};

// 2. Create an array named students containing at least three student objects. Each student
// object should include a name and an array of grades.

const students: Student[] = [
  {
    name: "John",
    grades: [80, 85, 90],
  },
  {
    name: "Usman",
    grades: [75, 80, 85],
  },
  {
    name: "Taha",
    grades: [90, 95, 100],
  },
];

// 3. Implement a function named calculateAverageGrade that takes a student's grades as
// input and returns the average grade for that student.

const calculateAverageGrade = (grades: number[]) => {
  const total = grades.reduce((acc, currentValue) => {
    return (acc += currentValue);
  });
  return total / grades.length;
};

// 4. Display each student's name and average grade. Iterate through the students array,
// calculate the average grade for each student using the calculateAverageGrade
// function, and print their name and average grade.

for (const student of students) {
  const averageGrade = calculateAverageGrade(student.grades);
  // console.log({
  //   name: student.name,
  //   averageGrade,
  // });
}
// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.

// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.

type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  salary: number;
};

// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.

const employees: Employee[] = [
  {
    name: "Muzammil",
    hoursWorked: 40,
    hourlyRate: 20,
    salary: 800,
  },
  {
    name: "Ammar",
    hoursWorked: 30,
    hourlyRate: 25,
    salary: 750,
  },
  {
    name: "Shayan",
    hoursWorked: 20,
    hourlyRate: 30,
    salary: 600,
  },
];

// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.

const calculateSalary = (employee: Employee) => {
  let salary = employee.salary;
  if (employee.hoursWorked > 20) {
    salary += (salary / 100) * 10;
  }
  return salary;
};

for (const employee of employees) {
  const newSalary = calculateSalary(employee);
  // console.log({
  //   name: employee.name,
  //   hoursWorked: employee.hoursWorked,
  //   baseSalary: employee.salary,
  //   newSalary,
  // });
}
