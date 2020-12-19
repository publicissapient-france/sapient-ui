describe('to-equal-color', () => {
  it.each([
    ['rgba(255, 0, 0, 0)'],
    ['rgb(255, 0, 0)'],
    ['#FF0000'],
    ['red'],
  ])('should equal expected color with %s format', (expected: string) => {
    expect('rgba(255, 0, 0, 0)').toEqualColor(expected)
  });

  it('should not equal expected color', () => {
    expect('rgba(255, 0, 0, 0)').not.toEqualColor('rgb(0, 0, 255)')
  });

  it('should throw a error if expected is an unknown color', () => {
    expect(() => expect('rgba(255, 0, 0, 0)').toEqualColor('reed'))
      .toThrowError('Unknown color: reed')
  });
})
