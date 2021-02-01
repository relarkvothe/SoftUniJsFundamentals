function solve(arr, n) {
  // едно завъртане - взимаме първи елемент - слагаме накрая на масива
  // повтаряме н пъти

  for (let i = 0; i < n; i++) {
    const el = arr.shift();
    arr.push(el);
  }

  console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2);
