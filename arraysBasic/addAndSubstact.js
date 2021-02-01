function solve(array) {
  let firstSum = 0;
  for (const element of array) {
    firstSum += element;
  }

  for (let index = 0; index < array.length; index++) {
    let element = array[index];

    if (element % 2 === 0) {
      array[index] += index; // this is new
    } else {
      array[index] -= index;
    }
  }

  let secondSum = 0;
  for (const element of array) {
    secondSum += element;
  }

  console.log(array);
  console.log(firstSum);
  console.log(secondSum);
}
solve([5, 15, 23, 56, 35]);
