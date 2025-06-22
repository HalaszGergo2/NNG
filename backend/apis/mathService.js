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

async function multiplyMatrices(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return "Mindkettő bemenetnek 2D mátrix tömbnek kell lennie.";
  }

  const rowsA = a.length;
  const colA = a[0].length;
  const rowsB = b.length;
  const colB = b[0].length;
  const result = Array.from({ length: rowsA }, () => Array(colB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colB; j++) {
      for (let k = 0; k < colA; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return result;
}
