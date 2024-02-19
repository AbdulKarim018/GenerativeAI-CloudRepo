const current_users = ["admin", "eric", "sarah", "john", "paul"];
const new_users = ["cat", "joHN", "dan", "alex", "paul"];

for (let i = 0; i < current_users.length; i++) {
  const current_user = current_users[i];

  for (let j = 0; j < new_users.length; j++) {
    const new_user = new_users[j];

    if (current_user.toLowerCase() === new_user.toLowerCase()) {
      console.log(
        `The Username "${current_user}" is already taken, try anything else.`
      );
      continue;
    }
  }
  console.log(`This username is available!`);
}
