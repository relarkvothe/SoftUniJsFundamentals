function rounding(arg1, arg2) {
  let numOne = Number(arg1);
  let numTwo = Number(arg2);

  if (numTwo > 15) {
    numTwo = 15;
  }

  numOne = numOne.toFixed(numTwo); // has to be string in order to use parseFloat.

  console.log(parseFloat(numOne)); // parseFloat removes zeros
}
rounding("10.5", " 3");
