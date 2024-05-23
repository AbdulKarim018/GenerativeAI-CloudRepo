// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.

// Task: Create a program that manages a simple friend list.

// 1. Define an object named people containing an empty array called friends.

type FriendType = {
  firstName: string;
  lastName: string;
  id: number;
};

type PeopleType = {
  friends: Array<FriendType>;
};

const people: PeopleType = {
  friends: [],
};

// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.

const friend1 = {
  firstName: "John",
  lastName: "Doe",
  id: 1,
};

const friend2 = {
  firstName: "Taha",
  lastName: "Riaz",
  id: 2,
};

const friend3 = {
  firstName: "Usman",
  lastName: "Rizwan",
  id: 3,
};

// 3. Add these friend objects to the friends array within the people object.

people.friends.push(friend1, friend2, friend3);

// 4. Output the entire people object to the console, displaying your information and your
// friend list.

console.log(people);
