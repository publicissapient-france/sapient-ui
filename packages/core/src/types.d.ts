declare namespace jest {
  interface Matchers<R, T> {
    toEqualColor(expected: string): R;
  }
}
