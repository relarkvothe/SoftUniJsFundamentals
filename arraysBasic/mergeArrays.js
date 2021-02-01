function mergeArr(arr1, arr2) {
  // обхождаме масиви
  // за всеки четен - сбор - добавям в трети масив
  // за всек нечетен - конкатенираме - добавяме в третия масив

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 == 0) {
      let sum = Number(arr1[i]) + Number(arr2[i]);
      result.push(sum);
    } else {
      result.push(arr1[i] + arr2[i]);
    }
  }

  console.log(result.join(" - "));
}
mergeArr(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
