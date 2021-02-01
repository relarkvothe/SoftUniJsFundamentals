function maxNum(array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    let isBigger = true;
    for (let j = index + 1; j < array.length; j++) {
      if (array[index] <= array[j]) {
        isBigger = false;
        break;
      }
    }

    if (isBigger) {
      result.push(array[index]);
    }
  }

  console.log(result.join(" "));
}
maxNum([1, 4, 3, 2]);

// top integer = цяло число което е по-голямо от всички елементи в дясно от него
// https://youtu.be/zbAE3qyQ1Yc?t=6450    debugging example
