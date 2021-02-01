function calculator(n) {
  let str = n.toString(); // превръщаме в стринг за да обходим
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  console.log(sum);
}
calculator(245678);
