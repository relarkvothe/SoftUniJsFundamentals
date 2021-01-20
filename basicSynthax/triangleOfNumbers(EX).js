function triangleOfNumbers(arg1) {
  let n = Number(arg1);

  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i + " ";
    }
    console.log(line); // Important. Console log should be here.
  }
}
triangleOfNumbers("5");
