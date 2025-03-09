function factorial(num) {
  if (num === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 0; i < num; i++) {
    result = result * (num - i);
  }

  return result;
}

const result = factorial(6);

console.log(result);
