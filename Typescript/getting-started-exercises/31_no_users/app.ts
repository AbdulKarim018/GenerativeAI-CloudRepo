const usernames: string[] = [];
if (usernames.length <= 0) console.log("We need to find some users!");
for (let i = 0; i < usernames.length; i++) {
  const username = usernames[i];
  if (username === "admin") {
    console.log(`Hello admin, would you like to see a status report?`);
    continue;
  }
  console.log(`Hello ${username}, thank you for logging in again.`);
}
