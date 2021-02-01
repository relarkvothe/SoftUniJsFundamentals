function solve(arg1) {
  let pounds = Number(arg1);
  let dollars = (pounds * 1.31).toFixed(3);
  console.log(dollars);
}
solve(80);
