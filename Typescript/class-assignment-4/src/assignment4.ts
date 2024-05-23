// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:

// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.

interface Student {
  name: string;
  senior: boolean;
  completedAssignments: boolean;
}

// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!

const students: Student[] = [
  { name: "Abdul", senior: false, completedAssignments: true },
  { name: "Usman", senior: true, completedAssignments: false },
  { name: "Taha", senior: false, completedAssignments: true },
  { name: "Muzammil", senior: true, completedAssignments: true },
  { name: "Mujtaba", senior: false, completedAssignments: false },
];

// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?

function getSeniorsWithCompleteAssignments(students: Student[]): Student[] {
  const filteredStudents: Student[] = [];
  for (const student of students) {
    if (student.senior && student.completedAssignments) {
      filteredStudents.push(student);
    }
  }
  return filteredStudents;
}

// console.log(getSeniorsWithCompleteAssignments(students));

// This information maybe helpful when we want to find students who are seniors and have completed their assignments.
// This information can be used to reward the students who have completed their assignments and are seniors.

// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

function removeStudentsWithIncompleteAssignments(
  students: Student[]
): Student[] {
  const filteredStudents: Student[] = [];
  for (const student of students) {
    if (student.senior && student.completedAssignments) {
      filteredStudents.push(student);
    }
  }
  return filteredStudents;
}

// console.log(removeStudentsWithIncompleteAssignments(students));

// This information maybe helpful when we want to remove or punish students who haven't completed their assignments.
