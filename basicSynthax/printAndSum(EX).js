function printAndSum(arg1, arg2) {
  let numOne = Number(arg1);
  let numTwo = Number(arg2);
  let line = ""; // Important, the need of this variable
  let sum = 0; // Important, the need of this variable

  for (let i = numOne; i <= numTwo; i++) {
    line += i + " ";
    sum += i;
  }

  console.log(line);
  console.log(`Sum: ${sum}`);
}
printAndSum("0", "26");
