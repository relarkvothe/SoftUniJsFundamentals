function solve(a, b, c) {
  let town = a.toString();
  let population = Number(b);
  let area = Number(c);

  console.log(
    `Town ${town} has population of ${population} and area ${area} square km.`
  );
}
solve("Sofia", 1286383, 492);
