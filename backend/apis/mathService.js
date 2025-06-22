async function getFibonacci(number) {
  if (typeof number !== "number" || number < 0) {
    return "A bemenetnek pozitív egész SZÁM-nak kell lennie.";
  } else if (number === 1) {
    return 1;
  } else if (number === 0) {
    return 0;
  }

  let a = 0, b = 1;
  for (let i = 2; i <= number; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

async function multiplyMatrices(a, b){

}
