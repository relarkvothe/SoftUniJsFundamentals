function multiplicationTable(input) {
  let num = Number(input);

  for (let index = 1; index <= num; index++) {
    console.log(`${index} * ${num} = ${index * num}`);
  }
}
multiplicationTable(["5"]);
