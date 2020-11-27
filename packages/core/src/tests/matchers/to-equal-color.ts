const RGBA_PATTERN = /rgba\((\d+, \d+, \d+), [^,]+\)/
const EXTRACT_RGB_PATTERN = /rgba?\((\d+), (\d+), (\d+)/
const NAMED_COLOR_PATTERN = /^\w+$/

const toEqualColor = (received: string, expected: string) => {
  if (isNamedColor(expected)) {
    throw new Error(`Named color value (${expected}) is not supported because computed style only return RGBA value.`)
  }

  if (received === expected) {
    return true
  }

  // Need to remove alpha channel that is added by Puppeteer I don't why
  const sanitizedReceived = removeAlphaAndConvertToRGB(received)

  if (sanitizedReceived === expected) {
    return true
  }

  return rgbToHexa(sanitizedReceived) === expected?.toLowerCase();
}

const isNamedColor = (color: string) => NAMED_COLOR_PATTERN.test(color)

const removeAlphaAndConvertToRGB = (color: string) => (
  color.replace(RGBA_PATTERN, 'rgb($1)')
)

const rgbToHexa = (color: string) => {
  const [, r, g, b] = color.match(EXTRACT_RGB_PATTERN)
  return `#${decimalToHexa(r)}${decimalToHexa(g)}${decimalToHexa(b)}`
}

const decimalToHexa = (decimal: string) => (
  parseInt(decimal, 10)
    .toString(16)
    .padStart(2, '0')
)

expect.extend({
  toEqualColor(received: string, expected: string) {
    const equals = toEqualColor(received, expected)

    return {
      pass: equals,
      message: () => equals
        ? `Excepted ${received} not to equals ${expected}`
        : `Excepted ${received} to equals ${expected}`
    }
  }
})
