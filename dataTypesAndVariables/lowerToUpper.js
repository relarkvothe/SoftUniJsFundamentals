function solve(char) {
  let upper = char.toUpperCase();
  let result = "";

  if (upper === char) {
    result = "upper-case";
  } else {
    result = "lower-case";
  }
  console.log(result);
}
solve("L");
