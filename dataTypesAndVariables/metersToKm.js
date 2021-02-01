function solve(a) {
  let meters = Number(a);
  let kilometers = (meters / 1000).toFixed(2);

  console.log(kilometers);
}
solve(1852);
