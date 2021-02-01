function solve(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    //parse string 1
    arr1[i] = Number(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    // parse string 2
    arr2[i] = Number(arr2[i]);
  }

  let areEqual = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
    if (areEqual === true) {
      console.log(`Arrays are identical. Sum: ${sum}`);
    }
  }
}

solve(["10", "20", "30"], ["10", "20", "30"]);
