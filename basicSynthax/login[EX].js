function login(input) {
  let username = input.shift(); // moves the first element out of the string
  let pass = username.split("").reverse().join(""); // this is the username, reversed

  for (let i = 0; i < input.length; i++) {
    if (input[i] === pass) {
      console.log(`User ${username} logged in.`);
    } else {
      if (i == 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
