function somatorio(num) {
  if (num === 0) return 0;
  else {
    return num + somatorio(num - 1);
  }
}

console.log(somatorio(5));
