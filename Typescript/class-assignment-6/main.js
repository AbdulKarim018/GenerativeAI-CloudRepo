// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
// function fetchGreeting() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello!");
//     }, 2000);
//   });
// }
// console.log(await fetchGreeting());
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
// function simulateTask() {
//   console.log("Task started");
//   setTimeout(() => console.log("Task Complete"), 1000);
// }
// simulateTask();
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
// function fetchData() {
//   return new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 1000);
//   });
// }
// console.log(await fetchData());
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
// function fetchWithError() {
//   return new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//       return Math.random() > 0.5
//         ? resolve("Data fetched successfully!")
//         : reject("Data fetch failed!");
//     }, 1000);
//   });
// }
// fetchWithError()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
function fetchData() {
    return new Promise((resolve, reject) => {
        resolve("Data fetched");
    });
}
function processData() {
    return new Promise((resolve, reject) => {
        resolve("Data Processed");
    });
}
async function executeSequentially() {
    const data = await fetchData();
    const processedData = await processData();
    console.log(data);
    console.log(processedData);
}
executeSequentially();
export {};
