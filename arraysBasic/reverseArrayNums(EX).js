function solve(arg1, arg2) {
  let counter = Number(arg1);
  let initialArray = arg2;
  let newArray = [];

  for (let i = 0; i < counter; i++) {
    newArray.push(initialArray[i]);
  }

  let result = ""; 

  for (let j = newArray.length - 1; j >= 0; j--) {
    result += newArray[j];
    result += " ";
  }
  console.log(result);
}
solve(3, [10, 20, 30, 40, 50]);
