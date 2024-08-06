function repeat(operation: () => void, num: number) {
  if (num > 0) {
    operation();
  }
  num--;

  repeat(operation, num);
}
