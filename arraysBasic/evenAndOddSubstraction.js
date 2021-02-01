function solve(input) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
  }

  for (let num of input) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  console.log(sumEven - sumOdd);
}
solve([1, 2, 3, 4, 5, 6]);
