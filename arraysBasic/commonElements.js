function solve(array1, array2) {
  // обхождаме масив 1
  // за всеки елемент проверяваме дали се съдържа в масив 2
  // ако да - принитираме

  for (const element of array1) {
    let isEqual = array2.includes(element);
    if (isEqual) {
      console.log(element);
    }
  }
}
solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
