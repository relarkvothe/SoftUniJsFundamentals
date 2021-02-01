function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]); // parse array 1
  }

  // 1) check if array length is 1, print result
  let result = 0;
  if (arr.length === 1) {
    result = arr[0];
    console.log(`${result} is already condensed to number`);
  }

  // 2) if it's more than 1, condese subsequently until 1 num

  //   • Allocate a new array condensed[] of size nums.Length-1.
  //   • Sum the numbers from nums[] to condensed[]:
  //       ◦ condensed[i] = nums[i] + nums[i+1]
  //   • nums[] = condensed[]

 
}
solve([2, 10, 3]);
